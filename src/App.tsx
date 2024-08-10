import React from 'react';
import styled from 'styled-components';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import AudioProvider from './components/AudioContext';

const ScrollContainer = styled.div`
  height: auto;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
`;

const Content = styled.div`
  height: 600vh;
`;

const App: React.FC = () => {
  return (
    <AudioProvider>
      <ScrollContainer>
        <Content>
          <Hero />
          <AboutMe />
          <Education />
          <Skills />
          <Experience />
          <Projects />
          <ContactMe />
        </Content>
      </ScrollContainer>
      <Footer />
    </AudioProvider>
  );
};

export default App;
