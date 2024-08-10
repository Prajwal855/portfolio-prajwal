import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { useAudio } from './AudioContext'; 

const FooterContainer = styled.footer`
  width: calc(100% - 60px);
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
    padding: 5px;
    background: none; /* Remove background */
    color: #fff; /* Text color */
    border: none; /* Remove border */
    outline: none; /* Remove outline */
    cursor: pointer; /* Pointer cursor */
  }

  select option {
    background-color: rgba(200, 200, 200, 0.3); /* Grayish blur background for options */
    color: #000; /* Text color for options */
  }

  select option:hover {
    background-color: rgba(173, 216, 230, 0.5); /* Light bluish background on hover */
    color: #000; /* Text color on hover */
  }
`;

const AudioToggle = styled.button`
  background: none; /* Remove background */
  color: #fff; /* Text color */
  border: none; /* Remove border */
  padding: 10px;
  cursor: pointer;
  font-size: 16px;
  outline: none;
  display: flex;
  align-items: center;

  &:hover {
    color: #ddd; /* Change text color on hover */
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
        <select id="language-select" onChange={changeLanguage}>
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
