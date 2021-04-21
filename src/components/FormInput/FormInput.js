import React from 'react';

import './FormInput.scss';

const FormInput = ({
  label,
  htmlFor,
  className,
  name,
  type = 'text',
  value,
  disabled,
  onChange = () => {},
  ...otherProps
}) => {
  return (
    <div className={`form__group ${className ? className : ''}`}>
      <label className={`form__input-label`} htmlFor={htmlFor}>
        {label}
      </label>
      <input
        id={htmlFor}
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
