import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import BitmojiImage from '../assets/bitmoji.png'; // Adjust the path as needed

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const titleVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: 'easeOut' } },
};

const descriptionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.5, duration: 0.6, ease: 'easeOut' },
  }),
};

// Styled Components
const AboutMeSection = styled(motion.section)`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: white;
  text-align: left;
  padding: 0 5%;
  background: url('/path-to-background-image.jpg') no-repeat center center;
  background-size: cover;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 0 4%;
  }

  @media (max-width: 768px) {
    padding: 0 3%;
  }

  @media (max-width: 480px) {
    padding: 0 2%;
  }
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;

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

const DescriptionLine = styled(motion.p)`
  font-size: 1.25rem;
  color: #ddd;
  font-family: 'Roboto', sans-serif;
  max-width: 600px;
  margin: 10px 0;
  line-height: 1.6;

  @media (max-width: 1024px) {
    font-size: 1.1rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

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

const BitmojiContainer = styled.div`
  flex: 1;
  max-width: 40%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-right: 5%;

  img {
    max-width: 100%;
    height: auto;
  }

  @media (max-width: 1024px) {
    max-width: 60%;
    margin-right: 0;
    margin-bottom: 20px;
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

const AboutMe: React.FC = () => {
  const { t } = useTranslation();

  return (
    <AboutMeSection
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={containerVariants}
    >
      <BitmojiContainer>
        <img src="https://www.pngarts.com/files/11/Despicable-Me-PNG-Picture.png" alt="Bitmoji" />
      </BitmojiContainer>
      <TextContainer>
        <Title variants={titleVariants}>{t('About Me')}</Title>
        <DescriptionLine
          variants={descriptionVariants}
          custom={0}
        >
          {t('I am ')}<GradientText>Prajwal M</GradientText>{t(', a Full-Stack Software Engineer with over 2 years of experience in delivering comprehensive solutions.')}
        </DescriptionLine>
        <DescriptionLine
          variants={descriptionVariants}
          custom={1}
        >
          {t('My expertise spans ')}<GradientText>front-end</GradientText>{t(' and ')}<GradientText>back-end</GradientText>{t(' development, as well as ')}<GradientText>test automation</GradientText>{t('.')}
        </DescriptionLine>
        <DescriptionLine
          variants={descriptionVariants}
          custom={2}
        >
          {t('I have a strong command of ')}<GradientText>Python</GradientText>{t(', ')}<GradientText>Ruby on Rails</GradientText>{t(', and ')}<GradientText>React.js</GradientText>{t(', and am passionate about creating efficient and seamless user experiences.')}
        </DescriptionLine>
        <DescriptionLine
          variants={descriptionVariants}
          custom={3}
        >
          {t('I am driven by a commitment to ')}<GradientText>innovation</GradientText>{t(' and ')}<GradientText>excellence</GradientText>{t(', consistently striving to apply my skills to contribute to impactful projects.')}
        </DescriptionLine>
      </TextContainer>
    </AboutMeSection>
  );
};

export default AboutMe;
