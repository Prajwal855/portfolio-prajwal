import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useTranslation } from 'react-i18next';

// Animations
const fadeInLeft = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

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

// Gradient Text Styling
const GradientText = styled.span`
  background: linear-gradient(-45deg, #ff6ec4, #7873f5, #4f46e5, #9be15d);
  background-size: 400% 400%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: gradient 10s ease infinite;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

// Styled Components
const ExperienceSection = styled.section`
  position: relative;
  height: auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: left;
  padding: 0 5%;
  background: url('/path-to-background-image.jpg') no-repeat center center;
  background-size: cover;

  @media (max-width: 768px) {
    padding: 0 3%;
  }

  @media (max-width: 480px) {
    padding: 0 2%;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  margin: 10px 0;
  animation: ${fadeInLeft} 1s ease-out;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const CompanyName = styled.h2`
  font-size: 1.5rem;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  margin: 0;
  animation: ${fadeInLeft} 1s ease-out;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const CompanyPeriod = styled.p`
  font-size: 1.2rem;
  color: #ddd;
  font-family: 'Roboto', sans-serif;
  margin: 5px 0;
  text-align: right;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const Responsibilities = styled.p<{ delay: number }>`
  font-size: 1.2rem;
  color: #ddd;
  font-family: 'Roboto', sans-serif;
  max-width: 800px;
  margin: 10px 0;
  line-height: 1.6;
  opacity: 0;
  animation: ${fadeInUp} 1s ease-out forwards;
  animation-delay: ${props => props.delay}s;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const CompanyLink = styled.a`
  display: block;
  font-size: 1rem;
  color: #bbb;
  font-family: 'Roboto', sans-serif;
  text-align: right;
  text-decoration: underline;
  margin-top: 10px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

// Experience Component
const Experience: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <ExperienceSection>
      <div>
        <Title>{t('Experience')}</Title>
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '20px' }}>
          <div style={{ flex: '1', minWidth: '300px' }}>
            <CompanyName>
              <GradientText>{t('Cognitive Clouds Pvt Ltd')}</GradientText>
            </CompanyName>
            <CompanyPeriod>{t('Feb 2022 - Present')}</CompanyPeriod>
            <CompanyLink href="https://www.cognitiveclouds.com" target="_blank">
              {t('Visit Company Website')}
            </CompanyLink>
          </div>
          <div style={{ flex: '2', minWidth: '300px' }}>
            <Responsibilities delay={0}>
              {t('As a key member of the development team, I have played a crucial role in delivering scalable and high-performance front-end solutions.')}
            </Responsibilities>
            <Responsibilities delay={0.5}>
              {t('My responsibilities include designing and implementing user interfaces using ')}
              <GradientText>React.js</GradientText>
              {t(' and ')}
              <GradientText>TypeScript</GradientText>
              {t(', ensuring a responsive and seamless user experience.')}
            </Responsibilities>
            <Responsibilities delay={1}>
              {t('I have collaborated closely with back-end developers to integrate ')}
              <GradientText>APIs</GradientText>
              {t(', resulting in efficient data handling and improved application performance.')}
            </Responsibilities>
            <Responsibilities delay={1.5}>
              {t('I have also focused on automating testing processes, enhancing CI/CD pipelines, and refining framework utilities to streamline development workflows and ensure high code quality.')}
            </Responsibilities>
            <Responsibilities delay={2}>
              {t('In addition to my technical contributions, I have actively participated in team meetings and code reviews, providing valuable feedback and fostering a collaborative work environment.')}
            </Responsibilities>
            <Responsibilities delay={2.5}>
              {t('My role has also involved troubleshooting and debugging complex issues, contributing to the continuous improvement of our software products.')}
            </Responsibilities>
          </div>
        </div>
      </div>
    </ExperienceSection>
  );
};

export default Experience;
