import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";

const BeforeAfterPlayer = ({ title, beforeSrc, afterSrc }) => {
  const audioRef = useRef(null);
  const [version, setVersion] = useState("before");

  const savedTimeOnToggleRef = useRef(0);
  const resumeAfterToggleRef = useRef(false);
  const pendingSeekRef = useRef(false);

  const currentSrc = version === "before" ? beforeSrc : afterSrc;

  const switchVersion = useCallback(
    (next) => {
      if (next === version) return;
      const el = audioRef.current;
      if (el) {
        savedTimeOnToggleRef.current = el.currentTime;
        resumeAfterToggleRef.current = !el.paused;
        pendingSeekRef.current = true;
      }
      setVersion(next);
    },
    [version]
  );

  // After version (src) changes, restore playback position and resume if needed.
  useEffect(() => {
    if (!pendingSeekRef.current) return;
    const el = audioRef.current;
    if (!el) {
      pendingSeekRef.current = false;
      return;
    }

    const saved = savedTimeOnToggleRef.current;
    const shouldPlay = resumeAfterToggleRef.current;

    const applySeekAndMaybePlay = () => {
      pendingSeekRef.current = false;
      const dur = el.duration;
      if (!Number.isNaN(dur) && dur > 0) {
        el.currentTime = Math.min(
          Math.max(0, saved),
          Math.max(0, dur - 0.01)
        );
      } else {
        el.currentTime = saved;
      }
      if (shouldPlay) {
        el.play().catch(() => {});
      }
    };

    if (el.readyState >= 1) {
      applySeekAndMaybePlay();
    } else {
      el.addEventListener("loadedmetadata", applySeekAndMaybePlay, {
        once: true,
      });
    }
  }, [version, beforeSrc, afterSrc]);

  // Only one audio on the page plays at a time (other A/B players + any <audio>).
  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;

    const onPlay = () => {
      document.querySelectorAll("audio").forEach((a) => {
        if (a !== el && !a.paused) {
          a.pause();
        }
      });
    };

    el.addEventListener("play", onPlay);
    return () => el.removeEventListener("play", onPlay);
  }, []);

  return (
    <PlayerCard>
      <TrackTitle>{title}</TrackTitle>
      <ToggleRow role="group" aria-label="Before or after mix version">
        <ToggleBtn
          type="button"
          $active={version === "before"}
          aria-pressed={version === "before"}
          onClick={() => switchVersion("before")}
        >
          Before
        </ToggleBtn>
        <ToggleBtn
          type="button"
          $active={version === "after"}
          aria-pressed={version === "after"}
          onClick={() => switchVersion("after")}
        >
          After
        </ToggleBtn>
      </ToggleRow>
      <ActiveLabel>
        Playing: <strong>{version === "before" ? "Before" : "After"}</strong>
      </ActiveLabel>
      <audio ref={audioRef} controls preload="metadata" src={currentSrc} />
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

  audio {
    width: 100%;
    margin-top: 0.25rem;
  }
`;

const TrackTitle = styled.h3`
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
  text-align: center;
`;

const ToggleRow = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const ToggleBtn = styled.button`
  padding: 0.5rem 1.25rem;
  border-radius: 8px;
  border: 1px solid
    ${(p) => (p.$active ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.2)")};
  background: ${(p) =>
    p.$active
      ? "linear-gradient(135deg, rgba(102, 126, 234, 0.5) 0%, rgba(118, 75, 162, 0.5) 100%)"
      : "rgba(255,255,255,0.08)"};
  color: #fff;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:focus-visible {
    outline: 2px solid rgba(255, 255, 255, 0.6);
    outline-offset: 2px;
  }

  &:hover {
    border-color: rgba(255, 255, 255, 0.35);
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

export default BeforeAfterPlayer;
