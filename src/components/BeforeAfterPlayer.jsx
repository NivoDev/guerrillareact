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
  position: relative;
  background: linear-gradient(180deg, rgba(20, 18, 50, 0.85), rgba(13, 12, 34, 0.92));
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: 1.35rem;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  width: 100%;
  box-sizing: border-box;
  transition: border-color 0.35s ease, box-shadow 0.35s ease;
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.4);

  &::before, &::after {
    content: "+";
    position: absolute;
    top: 0.45rem;
    color: var(--saffron);
    font-family: var(--font-display);
    font-size: 0.85rem;
    opacity: 0.6;
  }
  &::before { left: 0.55rem; }
  &::after  { right: 0.55rem; }

  &:hover {
    border-color: var(--border-hot);
    box-shadow: 0 18px 36px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(167, 139, 250, 0.2) inset;
  }
`;

const TrackTitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
`;

const TrackTitle = styled.h3`
  font-family: var(--font-display);
  color: var(--bone);
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  margin: 0;
  text-align: center;
`;

const TrackSubtitle = styled.p`
  margin: 0;
  font-family: var(--font-display);
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.32em;
  text-transform: uppercase;
  color: var(--saffron);
  text-align: center;
  text-indent: 0.32em;
`;

const ToggleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.85rem;
  width: 100%;
  max-width: 420px;
  margin: 0 auto;
  flex-wrap: wrap;
`;

const EndLabel = styled.span`
  font-family: var(--font-display);
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--sand-muted);
  text-align: ${(p) => (p.$align === "left" ? "left" : "right")};
  min-width: 3.25rem;
`;

/* Binary toggle: cool stone when Before; warm ember when After. */
const SwitchButton = styled.button`
  position: relative;
  width: 3.6rem;
  height: 1.8rem;
  padding: 0;
  border: 1px solid ${(p) => (p.$on ? "rgba(167, 139, 250, 0.55)" : "var(--border)")};
  border-radius: 999px;
  background: ${(p) =>
    p.$on
      ? "linear-gradient(135deg, var(--clay) 0%, var(--ember) 55%, var(--ochre) 100%)"
      : "rgba(40, 38, 70, 0.85)"};
  box-shadow: ${(p) =>
    p.$on
      ? "inset 0 1px 3px rgba(0, 0, 0, 0.25), 0 0 18px rgba(167, 139, 250, 0.45)"
      : "inset 0 1px 4px rgba(0, 0, 0, 0.5)"};
  cursor: pointer;
  flex-shrink: 0;
  transition: background 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;

  &:hover {
    box-shadow: ${(p) =>
      p.$on
        ? "inset 0 1px 3px rgba(0, 0, 0, 0.22), 0 0 24px rgba(167, 139, 250, 0.6)"
        : "inset 0 1px 4px rgba(0, 0, 0, 0.5), 0 0 8px rgba(167, 139, 250, 0.18)"};
  }

  &:focus-visible {
    outline: 1px dashed var(--saffron);
    outline-offset: 4px;
  }
`;

const SwitchThumb = styled.span`
  position: absolute;
  top: 50%;
  left: 3px;
  width: 1.4rem;
  height: 1.4rem;
  margin-top: -0.7rem;
  border-radius: 50%;
  background: var(--bone);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
  transition: transform 0.2s ease;
  transform: translateX(${(p) => (p.$on ? "1.75rem" : "0")});
`;

const ActiveLabel = styled.p`
  margin: 0;
  text-align: center;
  font-family: var(--font-accent);
  font-style: italic;
  font-size: 0.9rem;
  color: var(--sand-muted);

  strong {
    color: var(--saffron);
    font-style: normal;
    font-family: var(--font-display);
    font-weight: 600;
    letter-spacing: 0.08em;
  }
`;

const AudioStack = styled.div`
  position: relative;
  width: 100%;
  margin-top: 0.25rem;

  audio {
    width: 100%;
    display: block;
    filter: sepia(0.25) hue-rotate(-12deg) saturate(0.9);
  }

  audio[hidden] {
    display: none !important;
  }
`;

export default BeforeAfterPlayer;
