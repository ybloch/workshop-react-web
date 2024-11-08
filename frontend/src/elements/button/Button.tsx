import React from "react";
import "./button.css";

type Props = {
  onClick: () => void;
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
  variant?: "primary-button" | "secondary-button" | "danger-button";
};

export const Button = (props: Props) => {
  return (
    <button
      className={`${props.variant} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
      style={props.style}
    >
      {props.children}
    </button>
  );
};
