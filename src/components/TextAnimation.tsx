import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AnimatedText = styled.div`
  animation: ${fadeIn} 1s ease-out;
`;

const TextAnimation: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <AnimatedText>
    <h1>{title}</h1>
    <p>{description}</p>
  </AnimatedText>
);

export default TextAnimation;
