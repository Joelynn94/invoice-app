import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import Avatar from '../Avatar/Avatar';
import Logo from '../Logo/Logo';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

import './Sidebar.scss';

const Sidebar = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <nav className='sidebar' style={{ backgroundColor: theme.navBarBg }}>
      <Logo />
      <ThemeToggle />
      <Avatar />
    </nav>
  );
};

export default Sidebar;
