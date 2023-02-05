import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './Styles/GlobalStyles';
import { lightTheme, darkTheme } from './Styles/ThemeStyles';
import useDarkMode from './Hooks/useDarkMode';
import HeaderComponent from './Components/HeaderComponent';
import BodyComponent from './Components/BodyComponent';

const App = () => {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!mountedComponent) return <div />;
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <div data-testid="Container">
        <HeaderComponent theme={theme} themeToggler={themeToggler} />
        <BodyComponent />
      </div>
    </ThemeProvider>
  );
};

export default App;
