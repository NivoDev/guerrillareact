import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";

const BeforeAfterPlayer = ({ title, subtitle, beforeSrc, afterSrc }) => {
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

  const isAfter = version === "after";

  return (
    <PlayerCard>
      <TrackTitleBlock>
        <TrackTitle>{title}</TrackTitle>
        {subtitle ? <TrackSubtitle>{subtitle}</TrackSubtitle> : null}
      </TrackTitleBlock>

      <ToggleRow>
        <EndLabel $align="left">Before</EndLabel>
        <SwitchButton
          type="button"
          role="switch"
          aria-checked={isAfter}
          $on={isAfter}
          aria-label="Switch between before and after mix"
          onClick={() =>
            switchVersion(isAfter ? "before" : "after")
          }
        >
          <SwitchThumb $on={isAfter} />
        </SwitchButton>
        <EndLabel $align="right">After</EndLabel>
      </ToggleRow>

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

const TrackTitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
`;

const TrackTitle = styled.h3`
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
  text-align: center;
`;

const TrackSubtitle = styled.p`
  margin: 0;
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
  text-align: center;
`;

const ToggleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  width: 100%;
  max-width: 420px;
  margin: 0 auto;
  flex-wrap: wrap;
`;

const EndLabel = styled.span`
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.55);
  text-align: ${(p) => (p.$align === "left" ? "left" : "right")};
  min-width: 3.25rem;
`;

/* Binary toggle: gray when Before; purple gradient (matches CTA) when After. */
const SwitchButton = styled.button`
  position: relative;
  width: 3.5rem;
  height: 1.75rem;
  padding: 0;
  border: none;
  border-radius: 999px;
  background: ${(p) =>
    p.$on
      ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
      : "#4a4d5c"};
  box-shadow: ${(p) =>
    p.$on
      ? "inset 0 1px 3px rgba(0, 0, 0, 0.25), 0 0 14px rgba(118, 75, 162, 0.45)"
      : "inset 0 1px 4px rgba(0, 0, 0, 0.45)"};
  cursor: pointer;
  flex-shrink: 0;
  transition: background 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    background: ${(p) =>
      p.$on
        ? "linear-gradient(135deg, #7588f0 0%, #8559b6 100%)"
        : "#555a6b"};
    box-shadow: ${(p) =>
      p.$on
        ? "inset 0 1px 3px rgba(0, 0, 0, 0.22), 0 0 18px rgba(118, 75, 162, 0.55)"
        : "inset 0 1px 4px rgba(0, 0, 0, 0.45)"};
  }

  &:focus-visible {
    outline: 2px solid rgba(255, 255, 255, 0.45);
    outline-offset: 3px;
  }
`;

const SwitchThumb = styled.span`
  position: absolute;
  top: 50%;
  left: 3px;
  width: 1.375rem;
  height: 1.375rem;
  margin-top: -0.6875rem;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.35);
  transition: transform 0.2s ease;
  transform: translateX(${(p) => (p.$on ? "1.75rem" : "0")});
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
