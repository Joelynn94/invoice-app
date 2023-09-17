import Image from "next/image";

import "./Button.css";

type Props = {
  variant?:
    | "default"
    | "primary"
    | "danger"
    | "dark"
    | "light"
    | "edit"
    | "transparent";
  size?: "sm" | "md" | "lg";
  icon?:
    | "arrow-down"
    | "arrow-right"
    | "arrow-left"
    | "calendar"
    | "check"
    | "delete"
    | "moon"
    | "plus"
    | "sun";
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  text?: string;
  type?: "button" | "submit" | "reset";
  style?: React.CSSProperties;
  [key: string]: any; // Allows for any other HTML button element props
};

export default function Button({
  variant,
  size,
  icon,
  children,
  onClick,
  disabled,
  text,
  type,
  style,
  ...otherProps
}: Props) {
  const checkButtonVariant = variant ? variant : "default";
  const checkButtonSize = size ? size : "md";
  const checkButtonIcon = icon ? icon : "";

  return (
    <button
      className={`btn btn-${checkButtonVariant} btn-${checkButtonSize} ${
        checkButtonIcon ? "btn-icon" : ""
      }`}
      disabled={disabled}
      type={type ? type : "button"}
      onClick={onClick}
      style={style ? style : {}}
      {...otherProps}
    >
      {icon && (
        <div>
          <Image
            src={`/assets/icon-${checkButtonIcon}.svg`}
            alt="icon"
            width={20}
            height={20}
            style={{ height: "auto", width: "auto" }}
          />
        </div>
      )}
      {text ? text : ""}
      {children}
    </button>
  );
}
