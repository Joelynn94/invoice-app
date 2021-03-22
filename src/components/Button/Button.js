import React from 'react';

import './Button.scss';

const Button = ({ children, disabled, size }) => {
  let className = '';

  if (size === 'sm') {
    className += 'btn-sm';
  } else if (size === 'lg') {
    className += 'btn-lg';
  } else {
    className += 'btn-md';
  }

  return (
    <button className={className} disabled={disabled} size={size}>
      {children}
    </button>
  );
};

export default Button;
