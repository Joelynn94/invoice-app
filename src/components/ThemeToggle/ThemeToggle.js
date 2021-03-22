import React from 'react';

import './ThemeToggle.scss';

const ThemeToggle = () => {
  return (
    <div className='themeToggle'>
      <img
        className='themeToggle__img'
        src='./assets/icon-sun.svg'
        alt='theme toggle icon'
      />
    </div>
  );
};

export default ThemeToggle;
