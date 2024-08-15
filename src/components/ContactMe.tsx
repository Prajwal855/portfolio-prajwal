import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
const resume = require('../assets/Prajwal-FullStackResume.pdf');

const GradientText = styled.h1`
  background: linear-gradient(135deg, #ff6ec4, #7873f5, #4f46e5, #9be15d);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-size: 60px;
  font-family: 'Roboto', sans-serif;
  margin: 0;
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

  @media (max-width: 768px) {
    font-size: 50px;
  }

  @media (max-width: 480px) {
    font-size: 40px;
  }
`;

const ContactMeSection = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const IconsContainer = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  gap: 20px;

  a {
    color: #fff;
    font-size: 24px;
    transition: color 0.3s;

    &:hover {
      color: #00bfff; /* Change color on hover */
    }
  }

  @media (max-width: 768px) {
    margin-top: 20px;
    gap: 15px;

    a {
      font-size: 20px;
    }
  }

  @media (max-width: 480px) {
    margin-top: 15px;
    gap: 10px;

    a {
      font-size: 18px;
    }
  }
`;

const ResumeButton = styled.a`
  margin-top: 40px;
  padding: 10px 20px;
  font-size: 18px;
  color: #fff;
  background: linear-gradient(145deg, #00bfff, #1e90ff); /* Neon blue gradient background */
  border-radius: 5px;
  text-decoration: none;
  transition: background 0.3s, color 0.3s, box-shadow 0.3s;
  box-shadow: 0 0 10px rgba(0, 191, 255, 0.8); /* Neon glow effect */

  &:hover {
    background: linear-gradient(145deg, #1e90ff, #00bfff); /* Inverse gradient on hover */
    color: #000;
    box-shadow: 0 0 15px rgba(0, 191, 255, 1); /* Brighter glow on hover */
  }

  @media (max-width: 768px) {
    padding: 8px 18px;
    font-size: 16px;
  }

  @media (max-width: 480px) {
    padding: 6px 15px;
    font-size: 14px;
  }
`;

const ContactMe: React.FC = () => {
  const { t } = useTranslation();

  return (
    <ContactMeSection>
      <div>
        <GradientText>{t('Contact Me')}</GradientText>
        <p>{t('Feel free to reach out to me via email or LinkedIn.')}</p>
        <IconsContainer>
          <a href="https://github.com/Prajwal855" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="mailto:prajwal.mysore0077@gmail.com">
            <FaEnvelope />
          </a>
          <a href="https://www.linkedin.com/in/prajwal-m-30509320b" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </IconsContainer>
        
      </div>
      <ResumeButton href={resume} download>
          {t('Download Resume')}
        </ResumeButton>
    </ContactMeSection>
  );
};

export default ContactMe;
