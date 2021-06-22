import React from "react";
import styled from 'styled-components/';
import '../styles/bio.css';
import Card from './Card'
import Logo from '../Navbar/Logo';


export const About = ()=> {
    
    return (
        <Div>
            <Title>About</Title>
           <LogoPlacer>
               <Logo />
           </LogoPlacer>
            <Main>
                <Card />
            </Main>
        </Div>
    )
};
const LogoPlacer= styled.div`
    display;flex;
    position:relative;
    padding-top:20px;

    @media (min-width: 768px){
       display:none;
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

    const Title = styled.h1`
    padding-top:10px;
    display:flex;
    justify-content: center;
    align-items: center;
    font-family: Roboto Slab;
    font-size: 50px;
    @media (max-width: 768px) {
        display:none;
    }
    `;