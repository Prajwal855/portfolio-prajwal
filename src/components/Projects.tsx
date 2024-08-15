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

const slideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

// Styled Components
const ProjectsSection = styled.section`
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

const ProjectGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px; /* Gap between cards */
`;

const ProjectCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 8px;
  width: calc(50% - 20px); /* Two cards per row with gap adjustment */
  max-width: 500px; /* Adjust max-width as needed */
  animation: ${slideIn} 0.7s ease-out forwards;
  transition: transform 0.3s, box-shadow 0.3s;

  @media (max-width: 768px) {
    width: calc(100% - 20px); /* Full-width on small screens */
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const ProjectTitle = styled.h2`
  font-size: 36px;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 15px;
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

const ProjectDescription = styled.ul`
  font-size: 20px;
  color: #ddd;
  font-family: 'Roboto', sans-serif;
  line-height: 1.6;
  text-align: left;
  list-style: none;
  padding: 0;

  li {
    margin-bottom: 10px;
  }

  span {
    color: #ddd;
  }
`;

// Utility function to highlight keywords with gradient
const highlightKeywords = (text: string) => {
  return text.split(/(\b(?:Developed|Implemented|Designed|Handled|Managed)\b)/gi).map((part, index) => 
    /^(?:Developed|Implemented|Designed|Handled|Managed)$/i.test(part) ? (
      <GradientText key={index}>{part}</GradientText>
    ) : (
      <span key={index}>{part}</span>
    )
  );
};

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const projects = [
    {
      title: 'Emergen-1',
      description: t(`
        - Aimed at maintaining documents within the workspace of teams.
        - Developed the entire user interface and ensured smooth integration with relevant APIs.
        - Implemented 2-Factor Authentication for enhanced security.
        - Developed a chat feature for team communication.
        - Managed data through an Admin Console for efficient document handling.
      `).split('\n').filter(line => line.trim() !== ''),
    },
    {
      title: 'Smartshop',
      description: t(`
        - An e-commerce application where I was responsible for developing core functionalities and UI design.
        - Developed and optimized the search functionality.
        - Designed and implemented the dashboard interface.
        - Implemented user authentication, ensuring secure access to the platform.
      `).split('\n').filter(line => line.trim() !== ''),
    },
    {
      title: 'GoQR',
      description: t(`
        - A project centered around using QR codes as the primary mode for all functionality.
        - Developed the complete user interface and ensured smooth API integration.
        - Implemented authentication and authorization mechanisms.
        - Designed and integrated report generation features.
        - Developed camera functionality for scanning QR codes.
        - Handled profile management and administrative console sections using Ruby on Rails.
      `).split('\n').filter(line => line.trim() !== ''),
    },
    {
      title: 'AppViewX',
      description: t(`
        - Part of the core automation QA for a SaaS product, contributing to:
        - Framework improvements, utility, and POC development.
        - Test case automation and regression testing.
        - UI and API Testing using TestNG/Robot, Java/Python, and Selenium.
        - Worked with Kubernetes, Linux, IIS servers, and MongoDB for testing and deployment.
        - Utilized Postman, Jira, Grafana, and Kibana for testing and monitoring.
        - Raised 105 valid bugs during the project.
      `).split('\n').filter(line => line.trim() !== ''),
    },
  ];

  return (
    <ProjectsSection>
      <Title>{t('Projects')}</Title>
      <ProjectGrid>
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>
              {project.description.map((line, idx) => (
                <li key={idx}>{highlightKeywords(line)}</li>
              ))}
            </ProjectDescription>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </ProjectsSection>
  );
};

export default Projects;
