import React from 'react';
import styled, { keyframes } from 'styled-components';

const Loader = () => {
  return (
    <Container>
      <Mark>
        <Ring $delay="0s" $size={140} />
        <Ring $delay="0.4s" $size={100} />
        <Ring $delay="0.8s" $size={60} />
        <Dot />
      </Mark>
      <Label>GUERRILLA</Label>
    </Container>
  );
};

export default Loader;

const pulse = keyframes`
  0%   { transform: scale(0.6); opacity: 0.95; }
  60%  { transform: scale(1.15); opacity: 0; }
  100% { transform: scale(1.15); opacity: 0; }
`;

const Container = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  background:
    radial-gradient(60% 50% at 50% 50%, rgba(167, 139, 250, 0.12), transparent 70%),
    var(--bg-deep);
  z-index: 200;
`;

const Mark = styled.div`
  position: relative;
  width: 160px;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Ring = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  margin: ${({ $size }) => -$size / 2}px 0 0 ${({ $size }) => -$size / 2}px;
  border-radius: 50%;
  border: 1px solid var(--saffron);
  opacity: 0;
  animation: ${pulse} 2.2s ease-out infinite;
  animation-delay: ${({ $delay }) => $delay};
`;

const Dot = styled.span`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--saffron);
  box-shadow: 0 0 24px rgba(167, 139, 250, 0.75);
`;

const Label = styled.span`
  font-family: var(--font-display);
  font-size: 1rem;
  letter-spacing: 0.6em;
  color: var(--sand-soft);
  text-indent: 0.6em;
`;
