import React from 'react';

import './FormInput.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className='form__group'>
      {label ? <label className={`form__input-label`}>{label}</label> : null}
      <input className='form__input' onChange={handleChange} {...otherProps} />
    </div>
  );
};

export default FormInput;
