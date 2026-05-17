import React from 'react';
import styled, { css } from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const RightNav = ({ open, toggle }) => {
  const location = useLocation();

  return (
    <Ul open={open}>
      <Glow />
      <NavLink to="/" $isActive={location.pathname === '/'} onClick={toggle}>
        Home
      </NavLink>
      <NavLink to="/music" $isActive={location.pathname === '/music'} onClick={toggle}>
        Music
      </NavLink>
      <NavLink to="/mix-master-services" $isActive={location.pathname === '/mix-master-services'} onClick={toggle}>
        Mix &amp; Master
      </NavLink>
      <ExternalNavLink
        href="https://atomic-rose.com/product/psychedelic-horizons"
        target="_blank"
        rel="noopener noreferrer"
        onClick={toggle}
      >
        Sample packs
      </ExternalNavLink>
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
    background:
      radial-gradient(120% 70% at 50% 0%, rgba(167, 139, 250, 0.18), transparent 60%),
      linear-gradient(180deg, rgba(10, 9, 28, 0.96), rgba(13, 12, 34, 0.96));
    backdrop-filter: blur(14px) saturate(140%);
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    padding-top: 6rem;
    transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
    z-index: 99;
    align-items: center;
    gap: 1.25rem;
    margin: 0;
  }
`;

const Glow = styled.span`
  position: absolute;
  top: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 220px;
  height: 14px;
  background:
    radial-gradient(circle at 50% 50%, var(--saffron) 0 3px, transparent 4px),
    linear-gradient(90deg, transparent 0, rgba(167, 139, 250, 0.5) 14%, rgba(167, 139, 250, 0.5) 86%, transparent 100%);
  background-repeat: no-repeat;
  background-position: center, center;
  background-size: 14px 14px, 100% 1.5px;
  pointer-events: none;
`;

const linkBase = css`
  text-decoration: none;
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  padding: 0.65rem 2rem;
  border-radius: 4px;
  transition: color 0.3s ease, text-shadow 0.3s ease, background 0.3s ease;
  position: relative;

  &:hover {
    color: var(--bone);
    text-shadow: 0 0 18px rgba(167, 139, 250, 0.5);
    background: rgba(167, 139, 250, 0.06);
  }

  @media (max-width: 768px) {
    font-size: 1.65rem;
    padding: 0.9rem 2rem;
  }
`;

const NavLink = styled(Link)`
  ${linkBase};
  color: ${props => props.$isActive ? 'var(--saffron)' : 'var(--sand-soft)'};
`;

const ExternalNavLink = styled.a`
  ${linkBase};
  color: var(--sand-soft);
`;
