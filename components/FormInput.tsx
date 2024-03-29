"use client";

import React, { ChangeEvent } from "react";

import "./FormInput.css";

interface FormInputProps {
  label?: string;
  htmlFor: string;
  className?: string;
  name: string;
  type?: string;
  value: string | number;
  disabled?: boolean;
  required?: boolean;
  step?: string;
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  htmlFor,
  className,
  name,
  type = "text",
  value,
  disabled,
  required,
  step,
  onChange,
  ...otherProps
}: FormInputProps) => {
  return (
    <div className={`form__group ${className ? className : ""}`}>
      <label className={`form__input-label`} htmlFor={htmlFor}>
        {label}
      </label>
      <input
        id={htmlFor}
        className="form__input"
        name={name}
        type={type}
        value={value}
        disabled={disabled}
        required={required}
        step={step}
        onChange={onChange}
        {...otherProps}
      />
    </div>
  );
};

export default FormInput;
