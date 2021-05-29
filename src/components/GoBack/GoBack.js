import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';

import './GoBack.scss';

const GoBack = () => {
  const { clearInvoice } = useContext(AppContext);
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <Link
      to='/'
      className='go-back'
      onClick={clearInvoice}
      style={{ color: theme.text }}
    >
      <img
        className='go-back__arrow'
        src='../assets/icon-arrow-left.svg'
        alt=''
      />
      Go back
    </Link>
  );
};

export default GoBack;
