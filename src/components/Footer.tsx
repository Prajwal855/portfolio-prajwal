import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { useAudio } from './AudioContext';

const FooterContainer = styled.footer`
  width: calc(100% - 40px);
  max-height: 50px;
  padding: 20px;
  margin: 0 20px 40px 20px;
  background-color: rgba(255, 255, 255, 0.2); /* Whitish blur effect */
  backdrop-filter: blur(10px); /* Apply blur effect */
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 10;
`;

const SelectContainer = styled.div`
  display: flex;
  align-items: center;

  select {
    margin-left: 10px;
    padding: 10px 15px;
    background: none; 
    color: #fff;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  select option {
    background-color: #333;
    color: #fff;
    border: none;
  }
`;

const AudioToggle = styled.button`
  background: none; 
  color: #fff;
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 16px;
  outline: none;
  display: flex;
  align-items: center;
  transition: color 0.3s ease;

  &:hover {
    color: #ddd; 
  }
`;

const Footer: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { audioOn, toggleAudio } = useAudio();

  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <FooterContainer>
      <SelectContainer>
        <select id="language-select" onChange={changeLanguage} value={i18n.language}>
          <option value="en">English</option>
          <option value="fr">Français</option>
        </select>
      </SelectContainer>
      <AudioToggle onClick={toggleAudio}>
        {audioOn ? t('audioOn') : t('audioOff')}
      </AudioToggle>
    </FooterContainer>
  );
};

export default Footer;
