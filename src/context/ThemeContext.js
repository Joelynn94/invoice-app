import '../app.global.scss';
import React, { useState, createContext } from 'react';

// creating a Theme Context to use throughout the application
export const ThemeContext = createContext();

// create a context provder to wrap the entire application
const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState({
    isLightTheme: localStorage.getItem('isLightTheme')
      ? JSON.parse(localStorage.getItem('isLightTheme'))
      : false,
    light: {
      body: '#f8f8fb',
      altBody: '#373B53',
      text: '#0c0e16',
      textAccent: '#858BB2',
      cardBg: '#FFFFFF',
      altCardBg: '#F9FAFE',
      navBarBg: '#373B53',
      borderColor: '#DFE3FA',
    },
    dark: {
      body: '#141625',
      altBody: '#0C0E16',
      text: '#ffffff',
      textAccent: '#DFE3FA',
      cardBg: '#1E2139',
      altCardBg: '#252945',
      navBarBg: '#1E2139',
      borderColor: '#252945',
    },
  });

  const toggleTheme = () => {
    localStorage.setItem('isLightTheme', !theme.isLightTheme);
    setTheme({ ...theme, isLightTheme: !theme.isLightTheme });
  };

  // pass the previous state (theme) and new state (setTheme) to the context provider
  return (
    <ThemeContext.Provider value={{ ...theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
