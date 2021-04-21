import React from 'react';

import './FormInput.scss';

const FormInput = ({
  label,
  className,
  name,
  type = 'text',
  value,
  disabled,
  onChange = () => {},
  ...otherProps
}) => {
  const id = label
    .toLowerCase()
    .split(' ')
    .map((word) => word.replace(/[^a-z]+/g, ''))
    .join('-');
  return (
    <div className={`form__group ${className ? className : ''}`}>
      <label className={`form__input-label`} htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        className='form__input'
        name={name}
        type={type}
        value={value}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value, e)}
        {...otherProps}
      />
    </div>
  );
};

export default FormInput;
