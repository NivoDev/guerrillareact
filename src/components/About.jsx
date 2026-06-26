import React from "react";
import styled from "styled-components";
import "../styles/bio.css";
import Card from "./Card";
import Logo from "../Navbar/Logo";
import { Helmet } from "react-helmet-async";
import { FaPlay } from "react-icons/fa";
import { useLocation } from 'react-router-dom';

export const About = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <PageWrapper>
      <Helmet>
        <title>Guerrilla - Music</title>
        <meta
          name="description"
          content="Guerrilla is an emerging duo formed by Niv Rozanowich and Tomer Segev."
        />
      </Helmet>
      {!isHomePage && (
        <LogoPlacer>
          <Logo />
        </LogoPlacer>
      )}
      <Main>
        <Card />

        <SectionDivider aria-hidden="true">
          <svg viewBox="0 0 320 16" xmlns="http://www.w3.org/2000/svg">
            <line x1="6" y1="8" x2="140" y2="8" stroke="currentColor" strokeWidth="1" opacity="0.7" />
            <line x1="180" y1="8" x2="314" y2="8" stroke="currentColor" strokeWidth="1" opacity="0.7" />
            <path d="M148 8 L160 1 L172 8 L160 15 Z" fill="currentColor" />
            <circle cx="6" cy="8" r="2" fill="currentColor" />
            <circle cx="314" cy="8" r="2" fill="currentColor" />
          </svg>
        </SectionDivider>

        <Wrapper>
          <Song>
            <CornerOrnament aria-hidden="true">+</CornerOrnament>
            <CornerOrnament $right aria-hidden="true">+</CornerOrnament>
            <Link
              href="https://too.fm/7he-cr3w-vol1"
              target="_blank"
              rel="noreferrer"
            >
              <ImageContainer>
                <CoverImage
                  src="https://i1.sndcdn.com/artworks-k2jM8daAIrYwRizw-NJQWfQ-t500x500.jpg"
                  alt="Guerrilla - Midnight Bazaar"
                />
                <PlayOverlay>
                  <PlayIcon>
                    <FaPlay color="var(--bone)" size={22} />
                  </PlayIcon>
                </PlayOverlay>
              </ImageContainer>
              <Meta>
                <SongName>Guerrilla - Midnight Bazaar</SongName>
                <DateLine>26 Jun 2026</DateLine>
              </Meta>
            </Link>
            <PlayerWrapper>
              <iframe
                title="Guerrilla - Midnight Bazaar"
                src="https://open.spotify.com/embed/track/3bkSivrsibNBFIhQPd8hpS?utm_source=generator"
                width="100%"
                height="80"
                frameBorder="0"
                allowtransparency="true"
                allow="encrypted-media"
              />
            </PlayerWrapper>
          </Song>
        </Wrapper>

      </Main>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  padding-top: 96px;
  min-height: 100vh;
  width: 100%;
`;

const LogoPlacer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 1rem 2rem;
`;

const SectionDivider = styled.div`
  width: 320px;
  max-width: 80%;
  margin: 1rem auto 1.25rem;
  color: var(--saffron);
  opacity: 0.85;
  filter: drop-shadow(0 0 10px rgba(167, 139, 250, 0.35));

  svg { display: block; width: 100%; height: auto; }
`;

const Wrapper = styled.div`
  width: min(100%, 360px);
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: stretch;
  animation: fadeInUp 1s ease forwards;
`;

const Song = styled.div`
  position: relative;
  background:
    linear-gradient(180deg, rgba(20, 18, 50, 0.85), rgba(13, 12, 34, 0.92));
  border: 1px solid var(--border);
  border-radius: 4px;
  overflow: hidden;
  transition: border-color 0.35s ease, transform 0.35s ease, box-shadow 0.35s ease;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: var(--shadow-warm);

  &:hover {
    transform: translateY(-4px);
    border-color: var(--border-hot);
    box-shadow: 0 24px 48px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(167, 139, 250, 0.25) inset;
  }
`;

const CornerOrnament = styled.span`
  position: absolute;
  top: 0.5rem;
  ${({ $right }) => $right ? 'right: 0.6rem;' : 'left: 0.6rem;'}
  color: var(--saffron);
  font-family: var(--font-display);
  font-size: 0.85rem;
  opacity: 0.7;
  pointer-events: none;
`;

const Link = styled.a`
  text-decoration: none;
  color: var(--bone);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.85rem;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  border-radius: 2px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(167, 139, 250, 0.18);
`;

const CoverImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.5s ease, filter 0.5s ease;
  filter: saturate(0.95) contrast(1.05);

  ${ImageContainer}:hover & {
    transform: scale(1.05);
    filter: saturate(1.1) contrast(1.08);
  }
`;

const PlayOverlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  background: radial-gradient(circle at 50% 50%, rgba(10, 9, 28, 0.4), rgba(10, 9, 28, 0.05) 70%);
  transition: opacity 0.35s ease;
  z-index: 2;

  ${ImageContainer}:hover & {
    opacity: 1;
  }
`;

const PlayIcon = styled.div`
  width: 60px;
  height: 60px;
  background: rgba(167, 139, 250, 0.22);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(167, 139, 250, 0.65);
  transform: scale(0.8);
  transition: transform 0.35s ease, background 0.3s ease;
  box-shadow: 0 0 32px rgba(167, 139, 250, 0.45);

  ${ImageContainer}:hover & {
    transform: scale(1);
    background: rgba(167, 139, 250, 0.32);
  }
`;

const Meta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
`;

const SongName = styled.h2`
  font-family: var(--font-display);
  color: var(--bone);
  font-size: 1.05rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-align: center;
  margin: 0;
`;

const DateLine = styled.p`
  font-family: var(--font-accent);
  font-style: italic;
  font-size: 0.9rem;
  color: var(--sand-muted);
  margin: 0;
`;

const PlayerWrapper = styled.div`
  background: rgba(10, 9, 28, 0.55);
  border: 1px solid var(--border);
  border-radius: 2px;
  overflow: hidden;
  margin-top: auto;

  iframe {
    display: block;
    margin: 0;
  }
`;

