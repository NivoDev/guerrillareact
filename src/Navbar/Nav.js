import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import Burger  from './Burger'
import Logo from './Logo.jsx';
export const Navigator = ()=>{
    return(
        <Nav>     
            <LogoPlacer>
                <Logo />
            </LogoPlacer>   
            <NavLink to='/' activeStyle>
                Guerrilla
            </NavLink>
            <NavLink to='/music' activeStyle>
                Music
            </NavLink>
            <NavLink to='/contact' activeStyle>
                Contact
            </NavLink>   
            <Burger />  
        </Nav>
    )
}
const LogoPlacer= styled.div`
    display;flex;
    margin-left:2rem;
    justify-content:center;
    align-items: center;
    @media (min-width: 768px){
       display:none;
    `;

const Nav = styled.div`
    background: #000;
    width: 100%;
    display:flex;
    position:sticky;
    align-items: center;
    top:0;
    left:0;
    z-index:10000;
    @media (min-width: 768px){
        justify-content:space-around;
        align-items: center;
        padding:10px 0;
    }
    `;


const NavLink = styled(Link)`
    color:#fff;
    display:flex;
    align-items:center;
    margin:auto;
    padding:0rem 6rem;
    text-decoration: none;
    &:hover{
        color:#94be90;
    }
    @media (max-width: 768px) {
        visibility: hidden;
        
`;


