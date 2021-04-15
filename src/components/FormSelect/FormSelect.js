import React from 'react';

import './FormSelect.scss';

const FormSelect = ({
  children,
  label,
  value,
  className,
  handleChange,
  ...otherProps
}) => {
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
    </div>
  );
};

export default FormSelect;
