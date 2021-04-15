import React from 'react';

import './FormInput.scss';

const FormInput = ({
  handleChange,
  label,
  className,
  disabled,
  ...otherProps
}) => {
  return (
    <div className={`form__group ${className ? className : ''}`}>
      {label ? <label className={`form__input-label`}>{label}</label> : null}
      <input
        className='form__input'
        onChange={handleChange}
        disabled={disabled}
        {...otherProps}
      />
    </div>
  );
};

export default FormInput;
