import React from 'react'
import logo from '../images/Guerrilla-White-LOGO.png';
import styled from 'styled-components';

const Logo = () => {
    return (
        <Wrap>
            <Img src={logo} alt="Guerrilla logo" />
        </Wrap>
    )
}

export default Logo

const Wrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Img = styled.img`
    display: block;
    width: 220px;
    height: 220px;
    object-fit: contain;
    filter: drop-shadow(0 0 28px rgba(167, 139, 250, 0.4)) sepia(0.25) hue-rotate(-12deg) saturate(1.05);
    animation: fadeIn 1.6s ease forwards;

    @media (max-width: 768px) {
        width: 170px;
        height: 170px;
    }
`;
