"use client";

import Image from "next/image";
import "./FormSelect.css";

interface FormSelectProps {
  label?: string;
  icon?: string;
  className?: string;
  name: string;
  options: { item: string; value: number }[];
  defaultValue?: string;
  [key: string]: any; // Allows for any other HTML select element props
}

const FormSelect: React.FC<FormSelectProps> = ({
  label,
  value,
  icon = "",
  name,
  className,
  options,
  defaultValue,
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
          name={name}
          className="form__select"
          defaultValue={defaultValue}
        >
          <option>{label || "Choose an option"}</option>
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
