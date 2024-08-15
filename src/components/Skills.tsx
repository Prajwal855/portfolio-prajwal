import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useTranslation } from 'react-i18next';

// Animations
const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Styled Components
const SkillsSection = styled.section`
  position: relative;
  height: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  padding: 20px;
  background: url('/path-to-background-image.jpg') no-repeat center center;
  background-size: cover;
`;

const Title = styled.h1`
  font-size: 60px;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 40px;
  animation: ${fadeIn} 1s ease-out forwards;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 20px;
  width: 80%;
  max-width: 1200px; /* Adjust max-width as needed */
  
  @media (max-width: 768px) {
    width: 100%; /* Full-width on small screens */
  }
`;

const SkillCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 8px;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const SkillIcon = styled.img`
  width: 40px;
  height: 40px;
  margin-bottom: 10px;
`;

const gradientText = keyframes`
  0% { color: #ff8a00; }
  50% { color: #e52e71; }
  100% { color: #ff8a00; }
`;

const GradientText = styled.span`
  font-weight: bold;
  background: linear-gradient(90deg, #ff8a00, #e52e71);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${gradientText} 3s ease-in-out infinite;
`;

const SkillName = styled.p`
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
  color: #fff;
  margin: 0;
`;

// Skills Component
const Skills: React.FC = () => {
  const { t } = useTranslation();
  
  const skills = [
    { name: 'Ruby', icon: require('../assets/Ruby.webp') },
    { name: 'Python', icon: require('../assets/python-icon-256x254-m7n72ce3.webp')},
    { name: 'JavaScript', icon: require('../assets/javascript-icon-256x256-8sn98o22.webp') },
    { name: 'TypeScript', icon: require('../assets/typescript-icon-icon-512x512-yh0yu3ta.webp') },
    { name: 'Java', icon: require('../assets/b82aa7ac3f736dd78570dd3fa3fa9e24-java-programming-language-icon.webp') },
    { name: 'Rails', icon: require('../assets/rails-plain-wordmark-icon-202x256-3o5mk2wq.webp')},
    { name: 'React', icon: require('../assets/React-icon.webp') },
    { name: 'HTML', icon: require('../assets/1051277.webp') },
    { name: 'CSS', icon: require('../assets/919826.webp') },
    { name: 'Selenium', icon: require('../assets/selenium-icon-512x496-obrnvg2v.webp') },
    { name: 'Git', icon: require('../assets/git-icon-2048x2048-juzdf1l5.webp') },
    { name: 'Pycharm', icon: require('../assets/PyCharm_Icon.webp') },
    { name: 'Eclipse', icon: require('../assets/eclipse-icon-256x239-rx3zmej7.webp') },
    { name: 'VSCode', icon: require('../assets/file_type_vscode_icon_130084.webp') },
    { name: 'Kubernetes', icon: require('../assets/kubernetes-icon-512x499-3mjeet3c.webp') },
    { name: 'MySQL', icon: require('../assets/mysql-icon-256x251-roe92i86.webp') },
    { name: 'PostgreSQL', icon: require('../assets/Postgresql_elephant.webp') },
    { name: 'GitLab', icon: require('../assets/gitlab-icon-512x471-wfbmkpzi.webp') },
    { name: 'Jenkins', icon: require('../assets/file-type-jenkins-icon-233x256-z8kt30y6.webp') },
  ];

  return (
    <SkillsSection>
      <Title>{t('Skills')}</Title>
      <SkillsGrid>
        {skills.map((skill, index) => (
          <SkillCard key={index}>
            <SkillIcon src={skill.icon} alt={`${skill.name} logo`} />
            <SkillName><GradientText>{t(skill.name)}</GradientText></SkillName>
          </SkillCard>
        ))}
      </SkillsGrid>
    </SkillsSection>
  );
};

export default Skills;
