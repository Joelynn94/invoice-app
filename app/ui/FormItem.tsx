"use client";

import "./FormInput.css";

interface FormInputProps {
  label?: string;
  htmlFor: string;
  className?: string;
  name: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  step?: string;
  defaultValue?: string;
}

export default function FormItem({
  label,
  htmlFor,
  className,
  name,
  type = "text",
  disabled,
  required,
  step,
  defaultValue,
  ...otherProps
}: FormInputProps) {
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
        disabled={disabled}
        required={required}
        step={step}
        defaultValue={defaultValue}
        {...otherProps}
      />
    </div>
  );
}
