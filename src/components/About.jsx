import React from "react";
import styled from "styled-components";
import "../styles/bio.css";
import Card from "./Card";
import Logo from "../Navbar/Logo";
import { Helmet } from "react-helmet";
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
          content="Guerrilla is an emerging duo formed
            by Niv Rozanowich and Tomer Segev."
        />
      </Helmet>
      {!isHomePage && (
        <LogoPlacer>
          <Logo />
        </LogoPlacer>
      )}
      <Main>
        <Card />
        <Wrapper>
          <Song>
            <Link
              href="https://soundcloud.com/guerrillatrance/its-a-monster-remix"
              target="_blank"
              rel="noreferrer"
            >
              <ImageContainer>
                <CoverImage
                  src="https://i1.sndcdn.com/artworks-9xRyQb314iB4OHCo-qASVgA-t500x500.png"
                  alt="It's a monster"
                />
                <PlayOverlay>
                  <PlayIcon>
                    <FaPlay color="white" size={24} />
                  </PlayIcon>
                </PlayOverlay>
              </ImageContainer>
              <div>
                <SongName>
                  Rising Dust - It's a monster (Guerrilla Remix)
                </SongName>
                <Date>19 Feb 2025</Date>
              </div>
            </Link>
            <PlayerWrapper>
              <iframe 
                width="100%" 
                height="80" 
                scrolling="no" 
                frameBorder="no" 
                allow="autoplay" 
                title="Its a monster (Guerrilla Remix)"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2037953716&color=%23ff5500&inverse=false&auto_play=false&show_user=true"
              />
            </PlayerWrapper>
          </Song>
        </Wrapper>
        <br />
        <P>Stay tuned on Guerrilla's channels</P>
      </Main>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  padding-top: 80px;
  min-height: 100vh;
  width: 100%;
`;

const P = styled.h1`
position: relative;
    font-family: 'Rubik', sans-serif;
    letter-spacing: 1.5px;
    display:flex;
    flex-direction: column;
    flex-flow: wrap;
    color:white;
    // text-transform:uppercase;
    font-weight:bold;
    font-size: 20px;
    align-items: center;
    justify-content: center;
    max-width:600px;
    width:80%;
    line-height:25px;
    transform: translateY(2rem);
    animation: fadeInUp 4s ease forwards;
    a{
        padding:10px;
        -webkit-tap-highlight-color: transparent;
        font-size: 24px;
        text-decoration:none;
        position:relative;
        color:white;
        cursor:pointer;
        
    }
        @keyframes fadeInUp {
                to {
                opacity: 1;
                transform: translateY(0);
                }
    `;
const LogoPlacer = styled.div`
    display;flex;
    position:relative;
    padding-top:20px;

    // @media (min-width: 768px){
    //    display:none;
    // }
    `;

const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 15px;
`;

// const Title = styled.h1`
// padding-top:10px;
// display:flex;
// justify-content: center;
// align-items: center;
// font-family: Roboto Slab;
// font-size: 50px;
// @media (max-width: 768px) {
//     display:none;
// }
// `;

const SongName = styled.h2`
  color: white;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
`;

const Link = styled.a`
  text-decoration: none;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
  box-sizing: border-box;
`;

const Date = styled.h3`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
`;

const Wrapper = styled.div`
  width: 280px;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 250px;
  }
`;

// const Main = styled.div`
//     width:min(100%, 80rem);
//     display:flex;
//     flex-wrap:wrap;
//     color:white;
//     justify-content: center;
//     align-items: center;
//     margin: 5em auto;
//     gap:2.5em;
//     `;

// const Title = styled.h1`
//     padding-top:10px;
//     display:flex;
//     color:white;
//     justify-content: center;
//     align-items: center;
//     font-family: Roboto Slab;
//     font-size: 50px;
//     `;

const Song = styled.div`
  background: rgba(13, 12, 34, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
  box-sizing: border-box;

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(255, 255, 255, 0.2);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  border-radius: 12px;
  overflow: hidden;
  box-sizing: border-box;
`;

const CoverImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  transition: transform 0.3s ease-in-out;
  border-radius: 12px;

  ${ImageContainer}:hover & {
    transform: scale(1.05);
  }
`;

const PlayOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.3s ease-in-out;
  z-index: 2;
  border-radius: 12px;

  ${ImageContainer}:hover & {
    opacity: 1;
  }
`;

const PlayIcon = styled.div`
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(5px);
  border: 2px solid rgba(255, 255, 255, 0.5);
  transform: scale(0.8);
  transition: all 0.3s ease-in-out;

  ${ImageContainer}:hover & {
    transform: scale(1);
  }

  svg {
    opacity: 0.9;
  }
`;

const PlayerWrapper = styled.div`
  background: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  overflow: hidden;
  margin-top: auto;
  
  iframe {
    display: block;
    margin: 0;
  }
`;