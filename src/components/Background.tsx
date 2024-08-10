import React from 'react';
import styled from 'styled-components';

const BackgroundSection = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: -1;

  video {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: translate(-50%, -50%);
  }
`;

const Background: React.FC = () => {
  return (
    <BackgroundSection>
      <video autoPlay loop muted>
        <source src={require('../assets/High tech digital world background 4k.mp4')} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </BackgroundSection>
  );
};

export default Background;
