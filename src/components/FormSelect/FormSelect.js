import React from 'react';

import './FormSelect.scss';

const FormSelect = ({
  children,
  label,
  value,
  handleChange,
  ...otherProps
}) => {
  console.log(value);
  return (
    <div className='form__group'>
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
