"use client";

import React, { ReactNode, ChangeEvent } from "react";

import Image from "next/image";
import "./FormSelect.css";

interface FormSelectProps {
  label?: string;
  value: string | number;
  icon?: string;
  className?: string;
  options: { item: string; value: number }[];
  onChange: (evt: ChangeEvent<HTMLSelectElement>) => void;
  [key: string]: any; // Allows for any other HTML select element props
}

const FormSelect: React.FC<FormSelectProps> = ({
  label,
  value,
  icon = "",
  className,
  options,
  onChange,
  ...otherProps
}) => {
  const ICONS = [
    "arrow-down",
    "arrow-right",
    "arrow-left",
    "calendar",
    "check",
    "delete",
    "moon",
    "plus",
    "sun",
  ];
  const checkSelectIcon = ICONS.includes(icon) ? icon : "";

  return (
    <div className={`form__group ${className}`}>
      {label && <label className="form__input-label">{label}</label>}
      <div style={{ position: "relative" }}>
        <select
          className="form__select"
          onChange={onChange}
          {...otherProps}
          value={value}
        >
          <option value="">{label || "Choose an option"}</option>
          {options.map((option) => (
            <option
              className="form__option"
              key={option.value}
              value={option.value}
            >
              {option.item}
            </option>
          ))}
        </select>
        {icon && (
          <span className="span-with-icon">
            <Image
              src={`/assets/icon-${checkSelectIcon}.svg`}
              alt="icon"
              width={12}
              height={12}
              style={{ height: "auto", width: "auto" }}
            />
          </span>
        )}
      </div>
    </div>
  );
};

export default FormSelect;
