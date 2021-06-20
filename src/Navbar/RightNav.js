import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
const Nav = styled.div`
    width: 100%;
    display:flex;
    flex-direction:column;
    align-items: center;
    z-index:20; 
    `;

const Ul = styled.ul`
    margin:0;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
        @media (max-width: 768px) {
            justify-content: space-between;
            flex-flow: column nowrap;
            background-color: #0D2538;
            position: fixed;
            transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
            top: 0;
            right: 0;
            height: 100vh;
            width: 30vw;
            padding-top: 3.5rem;
            transition: transform 0.3s ease-in-out;
        }
    
    `;
const NavLink = styled(Link)`
    color:#fff;
    display:flex;
    align-items:center;
    padding:3rem;
    text-decoration: none;
    &:hover{
        color:#94be90;
    }
    @media (min-width: 768px) {
        display: none;
        
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
         <Nav>        
            <NavLink to='/' activeStyle>
                About us
            </NavLink>
            <NavLink to='/music' activeStyle>
                Music
            </NavLink>
            <NavLink to='/contact' activeStyle>
                Contact
            </NavLink>   
        </Nav>
    </Ul>
  )
}

export default RightNav