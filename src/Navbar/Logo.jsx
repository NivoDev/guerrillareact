import React from 'react'
import logo from '../images/Guerrilla-White-LOGO.png';
import styled from 'styled-components';
const Logo = () => {
    return (
        <div>
            <Img src={logo}/>
        </div>
    )
}

export default Logo
const Img = styled.img`
    margin: 0;
    display:flex;
    flex:1;
    font-family: Roboto Slab;
    width:180px;
    height:180px;
    position: relative;
    max-width: 250px ;
    animation: fadeIn 4s ease forwards;

        @keyframes fadeIn {
            from{
                opacity:0;
            }
            to {
            opacity: 1;
            }
`;
