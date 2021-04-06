import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

import './ThemeToggle.scss';

const ThemeToggle = () => {
  const { isLightTheme, light, dark, toggleTheme } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <div className='themeToggle'>
      <button className='themeToggle__btn' onClick={toggleTheme}>
        {theme === light ? (
          <img
            className='themeToggle__img'
            src='./assets/icon-moon.svg'
            alt='theme dark icon'
          />
        ) : (
          <img
            className='themeToggle__img'
            src='./assets/icon-sun.svg'
            alt='theme light icon'
          />
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;
