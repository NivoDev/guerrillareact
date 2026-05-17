import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { Link, useLocation } from 'react-router-dom'
import Burger from './Burger'
import LogoSmall from './LogoSmall';

export const Navigator = () => {
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <Nav $scrolled={scrolled}>
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
                        <NavLink to='/mix-master-services' $isActive={location.pathname === '/mix-master-services'}>
                            Mix &amp; Master
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <ExternalNavLink
                            href="https://atomic-rose.com/product/psychedelic-horizons"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Sample packs
                        </ExternalNavLink>
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
    z-index: 100;
    transition: background 0.35s ease, border-color 0.35s ease, backdrop-filter 0.35s ease;
    border-bottom: 1px solid ${({ $scrolled }) => $scrolled ? 'var(--border-hot)' : 'transparent'};
    background: ${({ $scrolled }) =>
        $scrolled
            ? 'linear-gradient(180deg, rgba(10, 9, 28, 0.85), rgba(13, 12, 34, 0.7))'
            : 'linear-gradient(180deg, rgba(10, 9, 28, 0.55), rgba(10, 9, 28, 0))'};
    backdrop-filter: ${({ $scrolled }) => $scrolled ? 'blur(14px) saturate(120%)' : 'blur(4px)'};

    /* Hairline tribal underline */
    &::after {
        content: '';
        position: absolute;
        left: 0; right: 0; bottom: -1px;
        height: 1px;
        background: linear-gradient(90deg, transparent 0%, rgba(167, 139, 250, 0.45) 50%, transparent 100%);
        opacity: ${({ $scrolled }) => $scrolled ? 1 : 0};
        transition: opacity 0.35s ease;
    }
`;

const NavContent = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.85rem 2rem;
    position: relative;

    @media (max-width: 768px) {
        padding: 0.75rem 1rem;
        justify-content: center;
    }
`;

const NavLinks = styled.div`
    display: flex;
    align-items: center;
    gap: 0.25rem;

    @media (max-width: 768px) {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        & > *:first-child { display: flex; }
        & > *:not(:first-child) { display: none; }
    }
`;

const NavItem = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`;

const linkBase = css`
    text-decoration: none;
    font-family: var(--font-display);
    font-size: 0.78rem;
    font-weight: 500;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    padding: 0.75rem 1.1rem;
    transition: color 0.3s ease, text-shadow 0.3s ease;
    position: relative;
    display: block;
    color: var(--sand-soft);

    &::after {
        content: '';
        position: absolute;
        left: 50%;
        bottom: 0.45rem;
        transform: translateX(-50%);
        width: 0;
        height: 1px;
        background: linear-gradient(90deg, transparent, var(--saffron), transparent);
        transition: width 0.35s ease;
    }

    &:hover {
        color: var(--bone);
        text-shadow: 0 0 18px rgba(167, 139, 250, 0.35);
    }
    &:hover::after {
        width: 60%;
    }
`;

const LogoLink = styled(Link)`
    text-decoration: none;
    display: flex;
    align-items: center;
    z-index: 101;
    padding: 0.5rem 1.25rem;
    transition: transform 0.3s ease, filter 0.3s ease;

    &:hover {
        transform: translateY(-1px);
        filter: drop-shadow(0 0 14px rgba(167, 139, 250, 0.35));
    }
`;

const NavLink = styled(Link)`
    ${linkBase};
    color: ${props => props.$isActive ? 'var(--bone)' : 'var(--sand-soft)'};

    &::after {
        width: ${props => props.$isActive ? '60%' : '0'};
    }
`;

const ExternalNavLink = styled.a`
    ${linkBase};
`;

const BurgerWrapper = styled.div`
    z-index: 101;
    @media (max-width: 768px) {
        position: absolute;
        right: 1rem;
    }
`;
