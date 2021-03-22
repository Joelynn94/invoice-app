import React from 'react';
import Avatar from '../Avatar/Avatar';
import Logo from '../Logo/Logo';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

import './Sidebar.scss';

const Sidebar = () => {
  return (
    <div>
      <Logo />
      <ThemeToggle />
      <Avatar />
    </div>
  );
};

export default Sidebar;
