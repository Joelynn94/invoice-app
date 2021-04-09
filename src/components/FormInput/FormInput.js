import React from 'react';

import './FormInput.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className='form__group'>
      <input className='form__input' onClick={handleChange} {...otherProps} />
      {label ? (
        <label
          className={`form__input-label ${
            otherProps.value.length ? 'shrink' : ''
          }`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
