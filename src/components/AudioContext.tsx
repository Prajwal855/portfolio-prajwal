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
      audioRef.current.src = require('../assets/Mr.Kitty - After Dark.mp3');
      audioRef.current.loop = true;
    }

    if (audioRef.current && audioOn) {
      audioRef.current.play().catch(error => {
        console.log('Playback failed:', error);
      });
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, [audioOn]);

  const toggleAudio = () => {
    setAudioOn(prev => !prev);
    if (audioRef.current) {
      if (audioOn) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => {
          console.log('Playback failed:', error);
        });
      }
    }
  };

  const startAudio = () => {
    if (audioRef.current && !audioOn) {
      audioRef.current.play().catch(error => {
        console.log('Playback failed:', error);
      });
      setAudioOn(true);
    }
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
