import React from 'react';
import styled, { keyframes } from 'styled-components';
import Background from './Background';
import { useTranslation } from 'react-i18next';

// Keyframes for animations
const bounceIn = keyframes`
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const typing = keyframes`
  from {
    width: 0;
    opacity: 0;
  }
  to {
    width: 100%;
    opacity: 1;
  }
`;

const blinkCursor = keyframes`
  from, to {
    border-color: transparent;
  }
  50% {
    border-color: #fff;
  }
`;


const colorChange = keyframes`
  0% { color: #fff; }
  25% { color: #ff6347; } /* Example color */
  50% { color: #00bfff; } /* Example color */
  75% { color: #32cd32; } /* Example color */
  100% { color: #fff; }
`;


const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  overflow: hidden;
`;

const TextContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const Name = styled.div`
  font-size: 100px;
  color: #fff;
  font-family: Poppins, sans-serif;
  margin: 0;
  animation:  ${colorChange} 10s linear infinite;
  z-index: 1;
`;

const SoftwareEngineer = styled.div`
  font-size: 50px;
  color: #fff;
  font-family: Poppins, sans-serif;
  margin: 0;
  opacity: 0;
  animation: ${fadeIn} 2s ease-out 2s forwards;
  z-index: 1;

  &:hover {
    color: #ff6347; /* Example hover color */
  }
`;

const DescriptionWrapper = styled.div`
  position: relative;
  max-width: 600px; /* Adjust as needed */
  height: 200px; /* Adjust as needed */
  overflow: hidden;
`;

const DescriptionLine = styled.div<{ delay: number }>`
  font-size: 21px;
  color: #fff;
  font-family: Poppins, sans-serif;
  white-space: nowrap;
  overflow: hidden;
  border-right: 4px solid #fff;
  display: inline-block;
   animation: ${typing} 2s steps(30, end), ${blinkCursor} 0.75s step-end infinite;
  opacity: 0;
  animation-delay: ${props => props.delay}s;
  animation-fill-mode: forwards;

  &:hover {
    color: #00bfff;
  }
`;

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <HeroSection>
      <Background />
      <TextContainer>
        <Name>Prajwal M</Name>
        <SoftwareEngineer>{t('Software Engineer')}</SoftwareEngineer>
        <DescriptionWrapper>
          <DescriptionLine delay={4}>
            {t('Building whatever pops into my head, one line of code at a time.')}
          </DescriptionLine>
          <DescriptionLine delay={8}>
            {t('Coding maverick with a passion for turning wild ideas into reality.')}
          </DescriptionLine>
        </DescriptionWrapper>
      </TextContainer>
    </HeroSection>
  );
};

export default Hero;
