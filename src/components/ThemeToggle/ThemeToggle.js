import React from 'react';

import './ThemeToggle.scss';

const ThemeToggle = () => {
  return (
    <div className='themeToggle'>
      <button className='themeToggle__btn'>
        <img
          className='themeToggle__img'
          src='./assets/icon-sun.svg'
          alt='theme toggle icon'
        />
      </button>
    </div>
  );
};

export default ThemeToggle;
