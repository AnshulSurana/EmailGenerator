import React from 'react';
import styled from 'styled-components';

import ThemeToggler from './ThemeToggler';
import * as CONSTANTS from '../constants';

const HeaderContainer = styled.div`
    background-color: ${({ theme }) => theme.headerBackground};
    font-family: "Times New Roman", Times, serif;
    color: ${({ theme }) => theme.titleTextColor};
    font-size: 30px;
    font-weight: 800;
    top: 0%;
    right: 0%;
    left: 0%;
    bottom: auto;
    position: fixed;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 10vh;
    z-index: 2;
`;

const HeaderTitle = styled.div`
    border:none;
`;

const HeaderComponent = ({ theme, themeToggler }) => (
  <HeaderContainer>
    <HeaderTitle>
      {CONSTANTS.EMAIL}
      {' '}
      {CONSTANTS.GUESSER}
    </HeaderTitle>
    <ThemeToggler theme={theme} toggleTheme={themeToggler} />
  </HeaderContainer>
);

export default HeaderComponent;
