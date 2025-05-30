import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom'
import Burger from './Burger'
import LogoSmall from './LogoSmall';

export const Navigator = () => {
    const location = useLocation();
    
    return (
        <Nav>     
            <NavContent>
                <NavLinks>
                    <NavItem>
                        <LogoLink to='/' $isActive={location.pathname === '/'}>
                            <LogoSmall />
                        </LogoLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='/music' $isActive={location.pathname === '/music'}>
                            Music
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='/contact' $isActive={location.pathname === '/contact'}>
                            Contact
                        </NavLink>
                    </NavItem>
                </NavLinks>
                <BurgerWrapper>
                    <Burger />
                </BurgerWrapper>
            </NavContent>
        </Nav>
    )
}

const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: rgba(13, 12, 34, 0.7);
    backdrop-filter: blur(10px);
    z-index: 100;
    transition: all 0.3s ease-in-out;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const NavContent = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
    position: relative;

    @media (max-width: 768px) {
        padding: 1rem;
        justify-content: center;
    }
`;

const NavLinks = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    @media (max-width: 768px) {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        
        & > *:first-child {
            display: flex;
        }
        & > *:not(:first-child) {
            display: none;
        }
    }
`;

const NavItem = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`;

const LogoLink = styled(Link)`
    text-decoration: none;
    display: flex;
    align-items: center;
    z-index: 101;
    padding: 0.5rem 1.5rem;
    transition: all 0.3s ease-in-out;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: ${props => props.$isActive ? '30%' : '0'};
        height: 2px;
        background: white;
        transition: all 0.3s ease-in-out;
        border-radius: 2px;
    }

    &:hover::before {
        width: 30%;
    }
`;

const NavLink = styled(Link)`
    text-decoration: none;
    color: ${props => props.$isActive ? '#fff' : 'rgba(255, 255, 255, 0.7)'};
    font-size: 1rem;
    font-weight: 500;
    padding: 0.5rem 1.5rem;
    transition: all 0.3s ease-in-out;
    position: relative;
    display: block;

    &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: ${props => props.$isActive ? '30%' : '0'};
        height: 2px;
        background: white;
        transition: all 0.3s ease-in-out;
        border-radius: 2px;
    }

    &:hover {
        color: #fff;

        &::before {
            width: 30%;
        }
    }
`;

const BurgerWrapper = styled.div`
    z-index: 101;
    @media (max-width: 768px) {
        position: absolute;
        right: 1rem;
    }
`;


