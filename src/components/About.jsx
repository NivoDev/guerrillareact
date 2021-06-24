import React from "react";
import styled from 'styled-components';
import '../styles/bio.css';
import Card from './Card'
import Logo from '../Navbar/Logo';
import GeneticsImg from '../images/releases-images/genetics album 3000.jpg'


export const About = ()=> {
    
    return (
        <Div>
            {/* <Title>About</Title> */}
           <LogoPlacer>
               <Logo />
           </LogoPlacer>
            <Main>
                <Card />
                <Wrapper>
                    <Song>
                        <Link href="https://distrokid.com/hyperfollow/guerrilla/prophecy" target="_blank" rel="noreferrer">
                        <img src={GeneticsImg} alt="genetics-album"></img>
                        <SongName> Genetics - Album <br></br><Date>02 July 2021</Date></SongName>    
                        </Link>
                        <IFrame title="Prophecy" src="https://open.spotify.com/embed/track/2JKeuzEejAoXyWUpewmmRt" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></IFrame>
                    </Song>
                </Wrapper>
            </Main>
        </Div>
    )
};
const LogoPlacer= styled.div`
    display;flex;
    position:relative;
    padding-top:20px;

    // @media (min-width: 768px){
    //    display:none;
    // }
    `;

const Div = styled.div`
    display:flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;
const Main = styled.div`
    display:flex;
    align-items: center;
    flex-direction: column;
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
color:black;
font-size:large;
&:hover{
    font-size:x-large;
}
animation: appear 3s linear;


@keyframes appear {
    0% {color:white;}
    100% {color:black;}
}
`;

const Link = styled.a`
display:flex;
color:black;
flex-direction: column;
justify-content: center;
align-items: center;
font-size:large;

`;

const Date= styled.h3`
    font-size: 16px;
    color:black;
    
`;
const IFrame = styled.iframe`
    display:block;
    position:abolute;
    justify-content: center;
    align-items: center;
    bottom:0;
   
   
`;

const Wrapper = styled.div`
    width:300px;
    color:white;
    height:100%;
    color:#000;
    display:flex;
    flex-direction: column;
    position:relative;
    align-items: center;
    justify-content: space-between;
    
        // border: 3px solid #333333;
        // border-radius: 2% 6% 5% 4% / 1% 1% 2% 4%;
        letter-spacing: 0.1ch;
   a{
       pointer:cursor;
       text-decoration:none;
       font-size: 25px;
       color:#fff;
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
    position: relative;
    color:black;
    z-index: 1;
    display:flex;
    flex-direction: column;
    align-items: center;
    min-width:80%;
    max-height:550px;
   
    &::before {
        content: "";
        position: absolute;
        top: 0;
        z-index:-8;
        bottom: 0;
        left: 0;
        border-radius:10px;
        right: 0;
        opacity: .4;
        background-color:#fff;
    }
    &iframe{
        bottom:0;
        display:absolute;
    }`

    