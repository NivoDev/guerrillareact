import React from 'react';
import styled from 'styled-components';

const Title = ({ children, eyebrow }) => {
  return (
    <TitleWrapper>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <TitleText>{children}</TitleText>
      <Ornament aria-hidden="true">
        <svg viewBox="0 0 220 16" xmlns="http://www.w3.org/2000/svg">
          <line x1="6" y1="8" x2="92" y2="8" stroke="currentColor" strokeWidth="1" opacity="0.7" />
          <line x1="128" y1="8" x2="214" y2="8" stroke="currentColor" strokeWidth="1" opacity="0.7" />
          <path d="M100 8 L110 2 L120 8 L110 14 Z" fill="currentColor" />
          <circle cx="6" cy="8" r="2" fill="currentColor" />
          <circle cx="214" cy="8" r="2" fill="currentColor" />
        </svg>
      </Ornament>
    </TitleWrapper>
  );
};

export default Title;

const TitleWrapper = styled.div`
  position: relative;
  text-align: center;
  padding: 2.5rem 1rem 2rem;
  margin: 0 auto 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1280px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 2rem 0.75rem 1.5rem;
    margin-bottom: 1.5rem;
  }
`;

const Eyebrow = styled.span`
  font-family: var(--font-display);
  font-size: 0.7rem;
  letter-spacing: 0.55em;
  text-transform: uppercase;
  color: var(--saffron);
  margin-bottom: 0.85rem;
  text-indent: 0.55em;
  text-align: center;
  max-width: 100%;

  @media (max-width: 480px) {
    font-size: 0.62rem;
    letter-spacing: 0.3em;
    text-indent: 0.3em;
  }
`;

const TitleText = styled.h1`
  color: var(--bone);
  font-family: var(--font-display);
  font-size: clamp(1.75rem, 5vw, 3.4rem);
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin: 0;
  padding: 0 0.5rem;
  position: relative;
  text-shadow: 0 0 28px rgba(167, 139, 250, 0.18);
  text-align: center;
  max-width: 100%;

  @media (max-width: 480px) {
    letter-spacing: 0.08em;
  }
`;

const Ornament = styled.div`
  width: min(220px, 75%);
  margin-top: 1.25rem;
  color: var(--saffron);
  opacity: 0.85;

  svg {
    width: 100%;
    height: auto;
    display: block;
    filter: drop-shadow(0 0 8px rgba(167, 139, 250, 0.4));
  }
`;
