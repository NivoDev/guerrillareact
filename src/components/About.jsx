import React from "react";
import styled from "styled-components";
import "../styles/bio.css";
import Card from "./Card";
import Logo from "../Navbar/Logo";
import GeneticsImg from "../images/releases-images/artwork-3000x3000-min.png";
import { Helmet } from "react-helmet";

export const About = () => {
  return (
    <Div>
      <Helmet>
        <title>Guerrilla - Music</title>
        <meta
          name="description"
          content="Guerrilla is an emerging duo formed
            by Niv Rozanowich and Tomer Segev."
        />
      </Helmet>
      {/* <Title>About</Title> */}
      <LogoPlacer>
        <Logo />
      </LogoPlacer>
      <Main>
        <Card />
        <Wrapper>
          <Song>
            <Link
              href="https://www.nutekrecords.com/nutek/geronimo_and_guerrilla_-_create.php"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://i1.sndcdn.com/artworks-Ie4vrm72Gc9UwTjS-1Y1trw-t500x500.png"
                alt="Supernova"
              ></img>
              <SongName>
                {" "}
                Create Ft. Geronimo{" "}
                <br></br>
                <Date>21 Mar 2025</Date>
              </SongName>
            </Link>
            <iframe
              title="Create Ft. Geronimo"
              src="https://open.spotify.com/embed/track/2qGJceUMrhkNSj1yMlJaWy"
              width="300"
              height="80"
              frameborder="0"
              allowtransparency="true"
              allow="encrypted-media"
            ></iframe>
          </Song>
        </Wrapper>
        <br />
        <P>Stay tuned on Guerrilla's channels</P>
      </Main>
    </Div>
  );
};

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
  color: black;
  font-size: large;
  &:hover {
    font-size: x-large;
  }
  animation: appear 3s linear;

  @keyframes appear {
    0% {
      color: white;
    }
    100% {
      color: black;
    }
  }
`;

const Link = styled.a`
  display: flex;
  color: black;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: large;
`;

const Date = styled.h3`
  font-size: 16px;
  color: black;
`;
const IFrame = styled.iframe`
  display: block;
  position: abolute;
  justify-content: center;
  align-items: center;
  bottom: 0;
`;

const Wrapper = styled.div`
  width: 300px;
  color: white;
  height: 100%;
  color: #000;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: space-between;

  // border: 3px solid #333333;
  // border-radius: 2% 6% 5% 4% / 1% 1% 2% 4%;
  letter-spacing: 0.1ch;
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
  position: relative;
  color: black;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 80%;
  width: 300px;
  max-height: 550px;

  &::before {
    content: "";
    position: absolute;
    top: 0;

    z-index: -8;
    bottom: 0;
    left: 0;
    border-radius: 10px;
    right: 0;
    opacity: 0.4;
    background-color: #fff;
  }
  &iframe {
    bottom: 0;
    display: absolute;
  }
`;
