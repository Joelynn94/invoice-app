import React from 'react';

import './FormSelect.scss';

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

const FormSelect = ({
  children,
  label,
  value,
  icon,
  className,
  handleChange,
  ...otherProps
}) => {
  const checkSelectIcon = ICONS.includes(icon) ? icon : '';
  return (
    <div className={`form__group ${className}`}>
      {label ? <label className='form__input-label'>{label}</label> : null}
      <select
        className='form__select'
        onChange={handleChange}
        {...otherProps}
        value={value}
      >
        {children}
      </select>
      {icon && (
        <span class='span-with-icon'>
          <img src={`./assets/icon-${checkSelectIcon}.svg`} alt='icon' />
        </span>
      )}
    </div>
  );
};

export default FormSelect;
