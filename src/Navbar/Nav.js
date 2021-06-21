import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import Burger  from './Burger'
import LogoSmall from './LogoSmall';

export const Navigator = ()=>{
    return(
        <Nav>     
            <NavLink to='/' activestyle>
                <LogoSmall />
            </NavLink>   
            <NavLink to='/about' activestyle>
                About
            </NavLink>
            <NavLink to='/music' activestyle>
                Music
            </NavLink>
            <NavLink to='/contact' activestyle>
                Contact
            </NavLink>   
            <Burger />  
        </Nav>
    )
}
// 
const Nav = styled.div`
    background: #000;
    display:flex;
    position:fixed sticky;
    align-items: center;
    top:0;
    left:0;
    right:0;
    justify-content:space-between;
    padding:25px 0;
    z-index:10000;
    @media (max-width: 768px){
        position:relative;
        justify-content:space-around;
        align-items: center;
        padding:25px 0;
    }
    `;


const NavLink = styled(Link)`
    color:#fff;
    display:inline;
    align-items:center;
    margin:auto;
    padding:0rem 6rem;
    text-decoration: none;
    &:hover{
        color:#94be90;
    }
    @media (max-width: 768px) {
        z-index:100000;
        display:none;
        
`;


