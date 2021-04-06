import '../app.global.scss';
import React, { useState, createContext } from 'react';

// creating a Theme Context to use throughout the application
export const ThemeContext = createContext();

// create a context provder to wrap the entire application
const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState({
    isLightTheme: true,
    light: {
      body: '#f8f8fb',
      text: '#0c0e16',
    },
    dark: {
      body: '#141625',
      text: '#ffffff',
    },
  });

  const toggleTheme = () => {
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
