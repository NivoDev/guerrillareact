import React from "react";
import styled from 'styled-components/';
import '../styles/bio.css';
import Card from './Card'
import Logo from '../Navbar/Logo';


export const About = ()=> {
    
    return (
        <Div>
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
    margin:0;
    padding:0;

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
    display:relative;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    `;

