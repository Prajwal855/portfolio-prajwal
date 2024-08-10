import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useTranslation } from 'react-i18next';
import Background from './Background';

const slideInLeft = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

// Fade-in with slight delay for the description
const fadeInUp = keyframes`
  0% {
    transform: translateY(20px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

// Styled Components
const AboutMeSection = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 60px;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  margin: 0;
  animation: ${slideInLeft} 1s ease-out;
`;

const DescriptionLine = styled.p<{ delay: number }>`
  font-size: 24px;
  color: #ddd;
  font-family: 'Roboto', sans-serif;
  max-width: 800px;
  margin: 10px 0;
  line-height: 1.5;
  opacity: 0;
  animation: ${fadeInUp} 1s ease-out forwards;
  animation-delay: ${props => props.delay}s;
`;

const AboutMe: React.FC = () => {
  const { t } = useTranslation();
  const description = [
    t('Full-stack software engineer with 2+ years of experience developing end-to-end solutions.'),
    t('Proficient in front-end, back-end, and test automation technologies.'),
    t('Skilled in Python, Ruby on Rails, and React.js.'),
    t('Passionate about creating seamless user experiences and efficient solutions.')
  ];

  return (
    <AboutMeSection>
      <Background />
      <div>
        <Title>{t('About Me')}</Title>
        {description.map((line, index) => (
          <DescriptionLine key={index} delay={index * 0.5}>
            {line}
          </DescriptionLine>
        ))}
      </div>
    </AboutMeSection>
  );
};

export default AboutMe;
