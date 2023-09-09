import React from "react";

import "./Heading.css";

type Props = {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children?: React.ReactNode;
  className?: string;
};

function Heading(props: Props) {
  const { children, variant } = props;

  // Define a mapping from variant to corresponding HTML element type
  const variantToElement = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
  };

  // Use the mapped element type or a default if variant is not provided
  const elementType = variant ? variantToElement[variant] : "h6";

  return React.createElement(elementType, props, children);
}

export default Heading;
