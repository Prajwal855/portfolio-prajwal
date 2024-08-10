import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useTranslation } from 'react-i18next';
import Background from './Background';

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

const ProjectsSection = styled.section`
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
  max-width: 800px;
  animation: ${slideIn} 0.7s ease-out forwards;
  transition: transform 0.3s, box-shadow 0.3s;

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

const ProjectDescription = styled.p`
  font-size: 20px;
  color: #ddd;
  font-family: 'Roboto', sans-serif;
  line-height: 1.6;
  text-align: left;
`;

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const projects = [
    {
      title: 'Emergen-1',
      description: t(`
        **Emergen-1**: Aimed at maintaining documents within the workspace of teams.
        - Developed the entire user interface and ensured smooth integration with relevant APIs.
        - Implemented 2-Factor Authentication for enhanced security.
        - Developed a chat feature for team communication.
        - Managed data through an Admin Console for efficient document handling.
      `),
    },
    {
      title: 'Smartshop',
      description: t(`
        **Smartshop**: An e-commerce application where I was responsible for developing core functionalities and UI design.
        - Developed and optimized the search functionality.
        - Designed and implemented the dashboard interface.
        - Implemented user authentication, ensuring secure access to the platform.
      `),
    },
    {
      title: 'GoQR',
      description: t(`
        **GoQR**: A project centered around using QR codes as the primary mode for all functionality.
        - Developed the complete user interface and ensured smooth API integration.
        - Implemented authentication and authorization mechanisms.
        - Designed and integrated report generation features.
        - Developed camera functionality for scanning QR codes.
        - Handled profile management and administrative console sections using Ruby on Rails.
      `),
    },
    {
      title: 'AppViewX',
      description: t(`
        **AppViewX**: Part of the core automation QA for a SaaS product, contributing to:
        - Framework improvements, utility, and POC development.
        - Test case automation and regression testing.
        - UI and API Testing using TestNG/Robot, Java/Python, and Selenium.
        - Worked with Kubernetes, Linux, IIS servers, and MongoDB for testing and deployment.
        - Utilized Postman, Jira, Grafana, and Kibana for testing and monitoring.
        - Raised 105 valid bugs during the project.
      `),
    },
  ];

  return (
    <ProjectsSection>
      <Background />
      <Title>{t('Projects')}</Title>
      <ProjectGrid>
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </ProjectsSection>
  );
};

export default Projects;
