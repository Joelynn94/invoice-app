import React from 'react';

const FormOption = ({ item, value, ...otherProps }) => {
  return (
    <>
      {item ? (
        <option className='form__option' value={value} {...otherProps}>
          {item}
        </option>
      ) : null}
    </>
  );
};

export default FormOption;
