import React from 'react';
import styled from 'styled-components';

const Title = ({ children }) => {
  return (
    <TitleWrapper>
      <TitleText>{children}</TitleText>
      <Underline />
    </TitleWrapper>
  );
};

export default Title;

const TitleWrapper = styled.div`
  position: relative;
  text-align: center;
  padding: 2rem 0 3rem 0;
  margin: 0 0 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const TitleText = styled.h1`
  color: white;
  font-size: 4rem;
  font-weight: 800;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin: 0;
  padding: 0;
  position: relative;
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
    letter-spacing: 0.1em;
  }
`;

const Underline = styled.div`
  width: 200px;
  height: 4px;
  margin-top: 1.5rem;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.3) 20%,
    rgba(255, 255, 255, 0.8) 50%,
    rgba(255, 255, 255, 0.3) 80%,
    transparent
  );
  border-radius: 2px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -3px;
    left: 50%;
    transform: translateX(-50%);
    width: 10px;
    height: 10px;
    background: white;
    border-radius: 50%;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
  }

  @media (max-width: 768px) {
    width: 150px;
    height: 3px;
    margin-top: 1rem;
    
    &::before {
      width: 8px;
      height: 8px;
      top: -2.5px;
    }
  }
`; 