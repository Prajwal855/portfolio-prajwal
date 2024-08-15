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
  background: linear-gradient(90deg, rgba(255,0,150,1) 0%, rgba(0,204,255,1) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
`;

// Styled Components
const EducationSection = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: row; /* Align items in a row */
  justify-content: space-between; /* Space between text and image */
  align-items: center; /* Center items vertically */
  color: white;
  text-align: left; /* Align text to the left */
  padding: 5% 10%; /* Adjust padding for better spacing */
  background: url('/path-to-background-image.jpg') no-repeat center center;
  background-size: cover;

  @media (max-width: 1024px) {
    flex-direction: column; /* Stack items on smaller screens */
    padding: 5% 7%;
  }

  @media (max-width: 768px) {
    padding: 5% 4%;
  }

  @media (max-width: 480px) {
    padding: 5% 2%;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  margin: 0;
  animation: ${fadeInLeft} 1s ease-out;

  @media (max-width: 1024px) {
    font-size: 2.5rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const DescriptionLine = styled.p<{ delay: number }>`
  font-size: 1.25rem;
  color: #ddd;
  font-family: 'Roboto', sans-serif;
  max-width: 800px;
  margin: 10px 0;
  line-height: 1.6;
  opacity: 0;
  animation: ${fadeInUp} 1s ease-out forwards;
  animation-delay: ${props => props.delay}s;
  text-align: left; /* Align text to the left */
`;

const BitmojiContainer = styled.div`
  flex: 1;
  max-width: 40%;
  display: flex;
  justify-content: flex-end; /* Align image to the right */
  align-items: center;
  margin-left: 5%;

  img {
    max-width: 100%;
    height: auto;
  }

  @media (max-width: 1024px) {
    max-width: 60%;
    margin-left: 0;
    margin-top: 20px; /* Add margin to top for spacing when stacked */
  }

  @media (max-width: 768px) {
    max-width: 80%;
  }
`;

const TextContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Education: React.FC = () => {
  const { t } = useTranslation();
  const gradientDescription = [
    t('Bachelor of Engineering at '),
    <GradientText key="university">Visvesvaraya Technological University</GradientText>,
    t(' from '),
    <GradientText key="year">2017 - 2021</GradientText>,
    t('. Achieved a CGPA of '),
    <GradientText key="cgpa">7.0</GradientText>,
    t('. Actively participated in '),
    <GradientText key="activities">student association groups</GradientText>,
    t(' and '),
    <GradientText key="clubs">youth clubs</GradientText>,
    t(' in Mangalore. Engaged in various '),
    <GradientText key="roles">leadership roles</GradientText>,
    t(' and organized multiple '),
    <GradientText key="events">events</GradientText>,
    t(' and workshops.')
  ];

  return (
    <EducationSection>
      <TextContainer>
        <Title>{t('Education')}</Title>
        <DescriptionLine delay={0}>
          {gradientDescription}
        </DescriptionLine>
      </TextContainer>
      <BitmojiContainer>
        <img src="https://www.pngall.com/wp-content/uploads/5/Learning-PNG-Free-Download.png" alt="Bitmoji" />
      </BitmojiContainer>
    </EducationSection>
  );
};

export default Education;
