import React from 'react';
import styled from 'styled-components';

const CheckBoxWrapper = styled.div`
  position: relative;
`;
const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
  background: rgba(65, 243, 243, 0.781);
  box-shadow: 0 0 1em 0.25em ${({ theme }) => theme.downloadButton};
  0 0.4em 1em ${({ theme }) => theme.glowColor};,
  inset 0 0 0.75em 0.25em ${({ theme }) => theme.downloadButton};
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin-left: 21px;
    transition: 0.2s;
  }
  }
`;

const ThemeToggler = ({ theme, toggleTheme }) => {
  const handleChange = () => {
    console.log('theme changed');
  };
  const checked = theme === 'dark';
  return (
    <CheckBoxWrapper>
      <CheckBox
        onChange={handleChange} 
        id="checkbox" 
        type="checkbox" 
        data-testid="toggleCheckBox"
        onClick={toggleTheme} 
        checked={checked} />
      <CheckBoxLabel htmlFor="checkbox" />
    </CheckBoxWrapper>
  );
};

export default ThemeToggler;
