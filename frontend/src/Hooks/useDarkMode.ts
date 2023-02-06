import { useEffect, useState } from 'react';

const useDarkMode = () => {
  const localHour = new Date().getHours();
  const localThemeFallback = localHour > 8 && localHour < 18 ? 'light' : 'dark';
  const [theme, setTheme] = useState(localThemeFallback);
  const [mountedComponent, setMountedComponent] = useState(false);
  const setMode = (mode: string) => {
    window.sessionStorage.setItem('theme', mode);
    setTheme(mode);
  };
  const themeToggler = () => (theme === 'light' ? setMode('dark') : setMode('light'));
  useEffect(() => {
    const localTheme = window.sessionStorage.getItem('theme');
    localTheme ? setTheme(localTheme) : setMode(localThemeFallback);
    setMountedComponent(true);
  }, []);
  return [theme, themeToggler, mountedComponent];
};

export default useDarkMode;
