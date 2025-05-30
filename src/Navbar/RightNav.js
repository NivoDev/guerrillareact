import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const RightNav = ({ open, toggle }) => {
  const location = useLocation();
  
  return (
    <Ul open={open}>
      <NavLink to="/" $isActive={location.pathname === '/'} onClick={toggle}>
        Home
      </NavLink>
      <NavLink to="/music" $isActive={location.pathname === '/music'} onClick={toggle}>
        Music
      </NavLink>
      <NavLink to="/contact" $isActive={location.pathname === '/contact'} onClick={toggle}>
        Contact
      </NavLink>
    </Ul>
  )
}

export default RightNav;

const Ul = styled.ul`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-flow: column nowrap;
    background: rgba(13, 12, 34, 0.95);
    backdrop-filter: blur(10px);
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    padding-top: 5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 99;
    align-items: center;
    gap: 2rem;
    margin: 0;
    padding-top: 6rem;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.$isActive ? '#fff' : 'rgba(255, 255, 255, 0.7)'};
  font-size: 1.5rem;
  font-weight: 500;
  padding: 0.5rem 2rem;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
  background: ${props => props.$isActive ? 'rgba(255, 255, 255, 0.1)' : 'transparent'};

  &:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    padding: 1rem 2rem;
  }
`;