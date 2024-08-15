import React from 'react';
import styled, { keyframes } from 'styled-components';

// Typing effect
const typing = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

// Blinking cursor
const blink = keyframes`
  from, to { border-color: transparent; }
  50% { border-color: white; }
`;

// Hide the cursor after typing ends
const hideCursor = keyframes`
  from { border-right-color: white; }
  to { border-right-color: transparent; }
`;

// Gradient color change animation
const gradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
  background: url('/path-to-background-image.jpg') no-repeat center center;
  background-size: cover;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const HeroContent = styled.div`
  max-width: 50%;

  @media (max-width: 768px) {
    max-width: 80%;
  }

  @media (max-width: 480px) {
    max-width: 90%;
  }
`;

const GradientText = styled.span`
  background: linear-gradient(-45deg, #ff6ec4, #7873f5, #4f46e5, #9be15d);
  background-size: 400% 400%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: ${gradient} 10s ease infinite;
`;

const HeroTitle = styled.h1`
  font-size: 64px;
  margin-bottom: 20px;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid white;
  animation:
    ${typing} 4s steps(44, end) 1s forwards, /* Typing animation */
    ${blink} 0.75s step-end infinite 4s, /* Cursor blink after typing */
    ${hideCursor} 0.1s forwards 5s; /* Hide cursor after typing ends */

  @media (max-width: 1024px) {
    font-size: 48px;
  }

  @media (max-width: 768px) {
    font-size: 36px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

const HeroPosition = styled.h2`
  font-size: 54px;
  margin-bottom: 20px;
  white-space: nowrap;
  overflow: hidden;

  @media (max-width: 1024px) {
    font-size: 48px;
  }

  @media (max-width: 768px) {
    font-size: 36px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

const BitmojiContainer = styled.div`
  max-width: 40%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  img {
    max-width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    max-width: 60%;
    margin-top: 20px;
  }

  @media (max-width: 480px) {
    max-width: 80%;
    margin-top: 20px;
  }
`;

const Hero: React.FC = () => {
  return (
    <HeroSection>
      <HeroContent>
        <HeroTitle>
          Hi, My name is <GradientText>Prajwal M</GradientText>
        </HeroTitle>
        <HeroPosition>I'm a Software Engineer</HeroPosition>
        <div style={{display:"flex",flexDirection:"column"}}>
          <h3 style={{fontSize:"22px"}}>
            Building whatever pops into my head, one line of code at a time.
          </h3>
          <h5 style={{fontSize:"22px"}}>
            <GradientText>Coding maverick</GradientText> with a passion for turning 
            <GradientText> wild ideas into reality</GradientText>
          </h5>
        </div>
      </HeroContent>
      <BitmojiContainer>
        <img src="https://static.vecteezy.com/system/resources/previews/020/962/986/original/software-engineer-graphic-clipart-design-free-png.png" alt="Bitmoji" />
      </BitmojiContainer>
    </HeroSection>
  );
};

export default Hero;
