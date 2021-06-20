import React from 'react';
import styled from 'styled-components/';
import Logo from '../Navbar/Logo';

const Card = () => {
    return (
        <Bio>
            <Logo width={200}/>
            <Profile src= "https://scontent.fsdv2-1.fna.fbcdn.net/v/t1.6435-9/121373857_1034993933613342_6748677683208343110_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=1p1Q6Oc8EP8AX8SjQta&_nc_ht=scontent.fsdv2-1.fna&oh=be5188f5699f9c0a557238ad51b6ef70&oe=60DD8551"/>
            <Par>
                Guerrilla is an emerging duo formed by Niv Rozanowich and Tomer Segev.
                Since few years that they are producing psy trance music together, constructing their original sound and unique formula.
                They publish their music on Nutek Records with a bright future of quality releases and pure dance floor material.
                Guerrilla sound combines  cultural influences with massive kick & bass sections and top notch production quality.

                Stay Tuned on Guerrilla’s channels:
                Spotify | Youtube | Instagram
                Facebook | Soundcloud | Itunes
                Deezer | Twitter | Amazon
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
    font-family: "Source Code Pro", monospace;
    display:flex;
    color:white;
    font-size: 16px;
    max-width:350px;
    justify-content: center;
    align-items: center;
    transform: translateY(10rem);
    animation: fadeInUp 4s ease forwards;
        @keyframes fadeInUp {
                to {
                opacity: 1;
                transform: translateY(0);
                }
            
    `;