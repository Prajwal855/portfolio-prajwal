import React from 'react';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import AudioProvider from './components/AudioContext';
import GlobalStyles from './styles/GlobalStyles';
import { LanguageProvider } from './contexts/LanguageContext';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AudioProvider>
        <GlobalStyles />
        <Hero />
        <AboutMe />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <ContactMe />
        <Footer />
      </AudioProvider>
    </LanguageProvider>
  );
};

export default App;
