import React from 'react'
import logo from '../images/Guerrilla-White-LOGO.png';
import styled from 'styled-components';

const LogoSmall = () => {
    return (
        <Wrap>
            <Img src={logo} alt="Guerrilla logo" />
        </Wrap>
    )
}

export default LogoSmall

const Wrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Img = styled.img`
    display: block;
    width: 96px;
    height: 96px;
    object-fit: contain;
    margin: -14px 0;
    filter: drop-shadow(0 0 12px rgba(167, 139, 250, 0.35)) sepia(0.25) hue-rotate(-12deg) saturate(1.05);
    transition: filter 0.35s ease, transform 0.35s ease;
    animation: fadeIn 1.5s ease forwards;

    &:hover {
        filter: drop-shadow(0 0 18px rgba(167, 139, 250, 0.55)) sepia(0.2) hue-rotate(-12deg) saturate(1.15);
    }

    @media (max-width: 768px) {
        width: 100px;
        height: 100px;
        margin: -18px 0;
    }
`;
