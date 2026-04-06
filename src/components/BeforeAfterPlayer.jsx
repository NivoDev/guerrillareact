import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";

const BeforeAfterPlayer = ({ title, beforeSrc, afterSrc }) => {
  const beforeRef = useRef(null);
  const afterRef = useRef(null);
  const [version, setVersion] = useState("before");

  const switchVersion = useCallback(
    (next) => {
      if (next === version) return;
      const before = beforeRef.current;
      const after = afterRef.current;
      if (!before || !after) return;

      const active = version === "before" ? before : after;
      const target = next === "before" ? before : after;
      const t = active.currentTime;
      const wasPlaying = !active.paused;

      active.pause();
      const dur = target.duration;
      const safeT =
        !Number.isNaN(dur) && dur > 0
          ? Math.min(Math.max(0, t), Math.max(0, dur - 0.01))
          : t;
      target.currentTime = safeT;
      if (wasPlaying) {
        target.play().catch(() => {});
      }
      setVersion(next);
    },
    [version]
  );

  // Keep inactive track locked to active position while playing (reduces switch latency).
  useEffect(() => {
    const before = beforeRef.current;
    const after = afterRef.current;
    if (!before || !after) return;

    const active = version === "before" ? before : after;
    const inactive = version === "before" ? after : before;

    const onTimeUpdate = () => {
      if (active.paused) return;
      const t = active.currentTime;
      const idur = inactive.duration;
      if (!Number.isNaN(idur) && idur > 0) {
        const sync = Math.min(Math.max(0, t), Math.max(0, idur - 0.01));
        if (Math.abs(inactive.currentTime - sync) > 0.12) {
          inactive.currentTime = sync;
        }
      }
    };

    active.addEventListener("timeupdate", onTimeUpdate);
    return () => active.removeEventListener("timeupdate", onTimeUpdate);
  }, [version, beforeSrc, afterSrc]);

  // Only one <audio> on the page plays at a time.
  useEffect(() => {
    const before = beforeRef.current;
    const after = afterRef.current;
    if (!before || !after) return;

    const onPlay = (e) => {
      const el = e.target;
      document.querySelectorAll("audio").forEach((a) => {
        if (a !== el && !a.paused) a.pause();
      });
    };

    before.addEventListener("play", onPlay);
    after.addEventListener("play", onPlay);
    return () => {
      before.removeEventListener("play", onPlay);
      after.removeEventListener("play", onPlay);
    };
  }, [beforeSrc, afterSrc]);

  const sliderValue = version === "before" ? 0 : 1;

  return (
    <PlayerCard>
      <TrackTitle>{title}</TrackTitle>

      <SliderRow>
        <EndLabel $align="left">Before</EndLabel>
        <SliderWrap>
          <SliderInput
            type="range"
            min={0}
            max={1}
            step={1}
            value={sliderValue}
            onChange={(e) => {
              const v = Number(e.target.value);
              switchVersion(v === 0 ? "before" : "after");
            }}
            aria-valuetext={
              version === "before" ? "Before mix" : "After mix"
            }
            aria-label="Switch between before and after audio"
          />
        </SliderWrap>
        <EndLabel $align="right">After</EndLabel>
      </SliderRow>

      <ActiveLabel>
        Playing: <strong>{version === "before" ? "Before" : "After"}</strong>
      </ActiveLabel>

      <AudioStack>
        <audio
          ref={beforeRef}
          src={beforeSrc}
          preload="auto"
          controls
          hidden={version !== "before"}
          aria-hidden={version !== "before"}
        />
        <audio
          ref={afterRef}
          src={afterSrc}
          preload="auto"
          controls
          hidden={version !== "after"}
          aria-hidden={version !== "after"}
        />
      </AudioStack>
    </PlayerCard>
  );
};

const PlayerCard = styled.div`
  background: rgba(13, 12, 34, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
  box-sizing: border-box;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: rgba(255, 255, 255, 0.2);
  }
`;

const TrackTitle = styled.h3`
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
  text-align: center;
`;

const SliderRow = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 0.65rem 0.85rem;
  width: 100%;
  max-width: 420px;
  margin: 0 auto;
`;

const EndLabel = styled.span`
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.55);
  text-align: ${(p) => (p.$align === "left" ? "left" : "right")};
`;

const SliderWrap = styled.div`
  position: relative;
  height: 28px;
  display: flex;
  align-items: center;
`;

const SliderInput = styled.input`
  width: 100%;
  height: 8px;
  margin: 0;
  appearance: none;
  -webkit-appearance: none;
  background: linear-gradient(
    90deg,
    rgba(80, 90, 140, 0.6) 0%,
    rgba(118, 75, 162, 0.75) 50%,
    rgba(180, 120, 200, 0.55) 100%
  );
  border-radius: 999px;
  outline: none;
  cursor: pointer;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.35);

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: linear-gradient(145deg, #e8e4ff 0%, #a89fd9 45%, #6b5fa8 100%);
    border: 2px solid rgba(255, 255, 255, 0.85);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(255, 255, 255, 0.15);
    transition: transform 0.15s ease, box-shadow 0.15s ease;
  }

  &::-webkit-slider-thumb:hover {
    transform: scale(1.06);
    box-shadow: 0 3px 14px rgba(102, 126, 234, 0.45);
  }

  &::-webkit-slider-thumb:active {
    transform: scale(0.98);
  }

  &::-moz-range-track {
    height: 8px;
    background: linear-gradient(
      90deg,
      rgba(80, 90, 140, 0.6) 0%,
      rgba(118, 75, 162, 0.75) 50%,
      rgba(180, 120, 200, 0.55) 100%
    );
    border-radius: 999px;
  }

  &::-moz-range-thumb {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: linear-gradient(145deg, #e8e4ff 0%, #a89fd9 45%, #6b5fa8 100%);
    border: 2px solid rgba(255, 255, 255, 0.85);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.35);
    cursor: pointer;
  }

  &:focus-visible {
    outline: 2px solid rgba(255, 255, 255, 0.45);
    outline-offset: 4px;
  }
`;

const ActiveLabel = styled.p`
  margin: 0;
  text-align: center;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.75);

  strong {
    color: #fff;
    font-weight: 600;
  }
`;

const AudioStack = styled.div`
  position: relative;
  width: 100%;
  margin-top: 0.25rem;

  audio {
    width: 100%;
    display: block;
  }

  audio[hidden] {
    display: none !important;
  }
`;

export default BeforeAfterPlayer;
