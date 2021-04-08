import React from 'react';
import { Link } from 'react-router-dom';

import './Logo.scss';

const Logo = () => {
  return (
    <div className='logo'>
      <Link to='/'>
        <img className='logo__img' src='../assets/logo.svg' alt='logo' />
      </Link>
    </div>
  );
};

export default Logo;
