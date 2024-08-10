import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import Background from './Background';
import TextAnimation from './TextAnimation';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

// Styled Components
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
`;

const ContactMe: React.FC = () => {
  const { t } = useTranslation();

  return (
    <ContactMeSection>
      <Background />
      <div>
        <TextAnimation
          title={t('Contact Me')}
          description={t('Feel free to reach out to me via email or LinkedIn.')}
        />
        <IconsContainer>
          <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="mailto:your-email@gmail.com">
            <FaEnvelope />
          </a>
          <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </IconsContainer>
      </div>
    </ContactMeSection>
  );
};

export default ContactMe;
