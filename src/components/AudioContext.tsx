// AudioContext.tsx
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

const AudioContext = createContext<{ audioOn: boolean; toggleAudio: () => void }>({
  audioOn: true,
  toggleAudio: () => {},
});

const AudioProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [audioOn, setAudioOn] = useState(false);
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = require('../assets/portfolio_music.webm');
      audioRef.current.loop = true;
    }
  }, []);

  useEffect(() => {
    if (!audioRef.current) {
      return;
    }
    if (audioOn) {
      audioRef.current.play().catch(error => {
        console.log('Playback failed:', error);
      });
    } else {
      audioRef.current.pause();
    }
  }, [audioOn]);

  useEffect(() => {
    const handleTabHidden = () => {
      if (document.hidden) {
        setAudioOn(false);
      }
    };

    document.addEventListener('visibilitychange', handleTabHidden);
    window.addEventListener('blur', handleTabHidden);

    return () => {
      document.removeEventListener('visibilitychange', handleTabHidden);
      window.removeEventListener('blur', handleTabHidden);
    };
  }, []);

  const toggleAudio = () => {
    setAudioOn(prev => !prev);
  };

  return (
    <AudioContext.Provider value={{ audioOn, toggleAudio }}>
      {children}
      <audio ref={audioRef} />
    </AudioContext.Provider>
  );
};

export const useAudio = () => useContext(AudioContext);
export default AudioProvider;
