import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Layout = (props) => {
  const { isLightTheme } = useContext(ThemeContext);

  if (isLightTheme) {
    document.body.classList.remove('dark');
    document.body.classList.add('light');
  } else {
    document.body.classList.remove('light');
    document.body.classList.add('dark');
  }

  return <div>{props.children}</div>;
};

export default Layout;
