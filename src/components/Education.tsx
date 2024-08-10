import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useTranslation } from 'react-i18next';
import Background from './Background';

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

const EducationSection = styled.section`
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
  animation: ${fadeInLeft} 1s ease-out;
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

const Education: React.FC = () => {
  const { t } = useTranslation();
  const description = [
    t('Bachelor of Engineering'),
    t('Visvesvaraya Technological University'),
    t('2017 - 2021')
  ];

  return (
    <EducationSection>
      <Background />
      <div>
        <Title>{t('Education')}</Title>
        {description.map((line, index) => (
          <DescriptionLine key={index} delay={index * 0.5}>
            {line}
          </DescriptionLine>
        ))}
      </div>
    </EducationSection>
  );
};

export default Education;
