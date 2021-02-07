import React from "react";
import { overrideTailwindClasses } from "tailwind-override";
interface Props {
  children: React.ReactNode;
  variant?: "contained" | "outlined";
  className?: string;
  shape?: "circle";
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

const Button = (props: Props) => {
  const _className = props.className || "";
  const circle = props.shape === "circle" ? "rounded-full px-2 py-2" : "";
  return props.variant === "contained" ? (
    <button
      onClick={props.onClick}
      className={overrideTailwindClasses(
        `bg-primary-500 rounded-md  font-bold text-white px-4 py-2 transition duration-300 ease-in-out focus:outline-none hover:bg-primary-600 ${circle} ${_className}`
      )}
    >
      {props.children}
    </button>
  ) : (
    <button
      onClick={props.onClick}
      className={overrideTailwindClasses(
        `text-primary-500 rounded-md font-bold px-4 py-2 transition duration-300 ease-in-out focus:outline-none hover:bg-primary-100 ${circle} ${_className}`
      )}
    >
      {props.children}
    </button>
  );
};

export default Button;
