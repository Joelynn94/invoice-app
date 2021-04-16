import React from 'react';

import './Button.scss';

const VARIANTS = [
  'default',
  'primary',
  'danger',
  'dark',
  'light',
  'edit-light',
  'edit-dark',
];
const SIZES = ['sm', 'md', 'lg'];
const ICONS = [
  'arrow-down',
  'arrow-right',
  'arrow-left',
  'calendar',
  'check',
  'delete',
  'moon',
  'plus',
  'sun',
];

const Button = ({
  children,
  type,
  variant,
  disabled,
  size,
  onClick,
  icon,
  style,
  className,
}) => {
  const checkButtonVariant = VARIANTS.includes(variant) ? variant : VARIANTS[0];

  const checkButtonSize = SIZES.includes(size) ? size : SIZES[0];

  const checkButtonIcon = ICONS.includes(icon) ? icon : '';

  return (
    <button
      className={`btn btn-${checkButtonVariant} btn-${checkButtonSize} ${
        checkButtonIcon ? 'btn-icon' : ''
      }`}
      disabled={disabled}
      type={type}
      onClick={onClick}
      icon={icon}
      style={style}
    >
      {icon && (
        <div>
          <img src={`./assets/icon-${checkButtonIcon}.svg`} alt='icon' />
        </div>
      )}
      {children}
    </button>
  );
};

export default Button;
