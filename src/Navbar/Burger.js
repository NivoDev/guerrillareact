import React, { useState } from 'react';
import styled from 'styled-components';
import RightNav from './RightNav';

const Burger = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  return (
    <>
      <StyledBurger open={open} onClick={toggle} aria-label="Toggle menu">
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open} toggle={toggle}/>
    </>
  )
}

export default Burger;

const StyledBurger = styled.button`
  width: 2rem;
  height: 2rem;
  position: relative;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 101;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  &:focus { outline: none; }
  &:focus-visible { outline: 1px dashed var(--saffron); outline-offset: 4px; }

  div {
    width: 2rem;
    height: 2px;
    background: var(--bone);
    border-radius: 10px;
    transition: all 0.3s ease;
    position: relative;
    transform-origin: 1px;
    box-shadow: 0 0 8px rgba(167, 139, 250, 0.35);

    &:first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
      background: ${({ open }) => open ? 'var(--saffron)' : 'var(--bone)'};
    }
    &:nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
      background: ${({ open }) => open ? 'var(--saffron)' : 'var(--bone)'};
    }
  }
`;
