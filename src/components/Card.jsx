import React from 'react';
import styled from 'styled-components/';
// import Logo from '../Navbar/Logo';

const Card = () => {
    return (
        <Bio>
            {/* <Logo width={200}/> */}
            <Profile src= "https://scontent.fsdv2-1.fna.fbcdn.net/v/t1.6435-9/121373857_1034993933613342_6748677683208343110_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=1p1Q6Oc8EP8AX8SjQta&_nc_ht=scontent.fsdv2-1.fna&oh=be5188f5699f9c0a557238ad51b6ef70&oe=60DD8551"/>
            <Par>
                Guerrilla is an emerging duo formed <br/>by Niv Rozanowich and Tomer Segev.<br/>
                Since few years that they are producing psy trance music together, constructing their original sound and unique formula.<br/>
                They publish their music on Nutek Records with a bright future of quality releases and pure dance floor material.<br/>
                Guerrilla sound combines  cultural influences with massive kick & bass sections and top notch production quality.<br/>

                Stay Tuned on Guerrilla’s channels:
                <a href="https://open.spotify.com/artist/1M3dLhsbP7HfxUHCxNCQq6" rel="noreferrer" target="_blank"> Spotify </a> | 
                <a href="https://www.youtube.com/channel/UC7L3nLa8wIVy8hPHAWap_9w" rel="noreferrer" target="_blank"> Youtube </a> | 
                <a href="https://www.instagram.com/guerrillatrance" target="_blank" rel="noreferrer"> Instagram </a> | 
                <a href="https://www.facebook.com/guerrillamusicofficial" rel="noreferrer" target="_blank"> Facebook </a> | 
                <a href="https://soundcloud.com/guerrillatrance" rel="noreferrer" target="_blank"> Soundcloud </a> | 
                <a href="https://music.apple.com/il/artist/guerrilla/305147041" rel="noreferrer" target="_blank"> Itunes </a> | 
                <a href="https://twitter.com/GuerrilaTrance" rel="noreferrer" target="_blank"> Twitter </a> | 
                <a href="https://www.deezer.com/fr/artist/252884" rel="noreferrer"target="_blank"> Deezer </a> | 
                <a href="https://music.amazon.com/artists/B001TQFGQ2/guerrilla" rel="noreferrer" target="_blank"> Amazon </a> | 
                <a href="https://www.beatport.com/artist/guerrilla/520256" rel="noreferrer" target="_blank"> Beatport </a>
            </Par>
        </Bio>
    )
}

export default Card

const Bio = styled.div`
    width: 100%;
    margin: 1em auto;
    padding: 10px;
    color:white;
    position: relative;
    overflow: hidden ;
    z-index: 10;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin:auto auto;
      max-width:600px;
      opacity: .4;
      background-color: #;
  }`;


const Profile = styled.img`
    width:15em;
    height:15em;
    float: left;
    margin: 20px;
    border-radius: 50%;
    position: relative;
    z-index: 1;
    animation: grow 0.6s;
`;

// const Brand = styled.div`
//    margin: 0;
//    display:flex;
//    font-family: Roboto Slab;
//    width:100px;
//    height:100px;
//    position: relative;
//    width: max-content;
//    transform: translateY(8rem);
//    animation: fadeInUp 4s ease forwards;

//     @keyframes fadeInUp {
//         to {
//         opacity: 1;
//         transform: translateY(0);
//         }
    
// `;

const Par = styled.h1`
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
    transform: translateY(10rem);
    animation: fadeInUp 4s ease forwards;
    a{
        padding:0 10px;
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