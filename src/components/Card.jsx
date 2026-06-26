import React from "react";
import styled from "styled-components";
import "../styles/bio.css";
import ProfileImg from "../images/GuerrillaProfile2025.jpg";

const Card = () => {
  return (
    <Bio>
      <PortraitWrap>
        <PortraitGlow aria-hidden="true" />
        <PortraitFrame aria-hidden="true" />
        <Portrait src={ProfileImg} alt="Guerrilla duo portrait" />
      </PortraitWrap>

      <Eyebrow>Progressive · Psytrance · Duo</Eyebrow>
      <Name>Guerrilla</Name>
      <Subtitle>Niv Rozanowich &amp; Tomer Segev</Subtitle>

      <Lede>
        Two producers, one sound — built from cultural roots, sculpted into massive
        kick and bass, and released through <Em>Nutek Records</Em>.
      </Lede>

      <Body>
        For years we&apos;ve been forging an original psytrance formula: hypnotic
        progressions, basslines you feel in your ribs, and atmospheres carved
        from the desert at night. Pure dancefloor material — and growing.
      </Body>

      <CallOut>
        Stream &amp; download our latest release below ↓
      </CallOut>
    </Bio>
  );
};

export default Card;

const Bio = styled.section`
  width: 100%;
  margin: 1rem auto 1.5rem;
  padding: 1rem 0;
  color: var(--bone);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  animation: fadeInUp 1.2s ease forwards;

  @media (max-width: 480px) {
    margin: 0.5rem auto 1rem;
    padding: 0.5rem 0;
  }
`;

const PortraitWrap = styled.div`
  position: relative;
  width: 14rem;
  height: 14rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  animation: slowFloat 7s ease-in-out infinite;

  @media (max-width: 768px) {
    width: 11rem;
    height: 11rem;
  }

  @media (min-width: 1024px) {
    width: 17rem;
    height: 17rem;
  }
`;

const PortraitGlow = styled.div`
  position: absolute;
  inset: -18%;
  border-radius: 50%;
  background: radial-gradient(circle at 50% 50%, rgba(167, 139, 250, 0.45), rgba(102, 126, 234, 0.08) 55%, transparent 70%);
  filter: blur(4px);
`;

const PortraitFrame = styled.div`
  position: absolute;
  inset: -6%;
  border-radius: 50%;
  border: 1px dashed rgba(167, 139, 250, 0.45);
  animation: rotateSlow 38s linear infinite;

  @keyframes rotateSlow {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
`;

const Portrait = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  z-index: 1;
  box-shadow:
    0 0 0 4px rgba(10, 9, 28, 0.7),
    0 0 0 5px rgba(167, 139, 250, 0.6),
    0 24px 60px rgba(0, 0, 0, 0.55);
  animation: grow 0.9s ease both;
  filter: saturate(1.05) contrast(1.02);
`;

const Eyebrow = styled.span`
  font-family: var(--font-display);
  font-size: 0.72rem;
  letter-spacing: 0.45em;
  text-transform: uppercase;
  color: var(--saffron);
  text-indent: 0.45em;
  margin-bottom: 0.5rem;
  text-align: center;
  max-width: 100%;

  @media (max-width: 480px) {
    font-size: 0.62rem;
    letter-spacing: 0.28em;
    text-indent: 0.28em;
  }
`;

const Name = styled.h1`
  font-family: var(--font-display);
  font-size: clamp(2.2rem, 8vw, 4.5rem);
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin: 0;
  color: var(--bone);
  text-shadow: 0 0 32px rgba(167, 139, 250, 0.18);
  text-indent: 0.18em;
  text-align: center;
  max-width: 100%;

  @media (max-width: 480px) {
    letter-spacing: 0.1em;
    text-indent: 0.1em;
  }
`;

const Subtitle = styled.p`
  font-family: var(--font-accent);
  font-style: italic;
  font-size: clamp(0.95rem, 3vw, 1.1rem);
  margin: 0.4rem 0 1.5rem;
  color: var(--sand-soft);
  letter-spacing: 0.04em;
  text-align: center;
  max-width: 100%;
`;

const Lede = styled.p`
  font-family: var(--font-body);
  font-size: clamp(0.95rem, 2.5vw, 1.1rem);
  line-height: 1.65;
  color: var(--bone);
  margin: 0.25rem auto 1rem;
  max-width: 720px;
  width: 100%;
  padding: 0 0.25rem;
`;

const Body = styled.p`
  font-family: var(--font-body);
  font-size: clamp(0.9rem, 2.2vw, 0.98rem);
  line-height: 1.7;
  color: var(--sand-soft);
  margin: 0 auto 1.25rem;
  max-width: 720px;
  width: 100%;
  padding: 0 0.25rem;
`;

const CallOut = styled.p`
  font-family: var(--font-display);
  font-size: clamp(0.65rem, 2vw, 0.78rem);
  letter-spacing: 0.32em;
  text-transform: uppercase;
  color: var(--ember);
  margin: 0.5rem auto 1.5rem;
  text-align: center;
  max-width: 100%;
  padding: 0 0.5rem;

  @media (max-width: 480px) {
    letter-spacing: 0.18em;
  }
`;

const Em = styled.span`
  color: var(--saffron);
  font-weight: 600;
`;
