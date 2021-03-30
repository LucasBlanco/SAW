import {CircularProgress} from "@material-ui/core";
import React from "react";
import {overrideTailwindClasses} from "tailwind-override";

interface Props {
  children: React.ReactNode;
  variant?: "contained" | "outlined" | "text" | "light";
  className?: string;
  disabled?: boolean;
  shape?: "circle" | "rounded" | "default";
  isLoading?: boolean;
  color?: string;
  type?: "button" | "submit";
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

const Button = ({
                  children,
                  variant = "text",
                  className = "",
                  disabled = false,
                  shape = "default",
                  color = "primary",
                  isLoading = false,
                  type = "button",
                  onClick,
                }: Props) => {
  const baseStyle =
      "rounded-md font-semibold px-4 py-2.5 transition-all duration-300 ease-in-out focus:outline-none flex items-center justify-center text-xs";

  const shapes = {
    rounded: "rounded-full px-2 py-2",
    circle: "rounded-full px-2 py-2 h-10 w-10",
    default: "",
  };

  const classes = {
    contained: `text-white ${
        disabled
            ? `bg-${color}-300 hover:bg-${color}-300 cursor-not-allowed`
            : `bg-${color}-400 hover:bg-${color}-500`
    }`,
    text: `${
        disabled ? `text-${color}-400 cursor-not-allowed` : `text-${color}-500 hover:bg-${color}-100`
    }`,
    outlined: `border-solid border-2 ${
        disabled
            ? `text-${color}-300 border-${color}-300 cursor-not-allowed`
            : `text-${color}-400 border-${color}-400 hover:bg-${color}-400 hover:text-white`
    }`,
    light: `${
        disabled
            ? `text-${color}-300 bg-${color}-200 cursor-not-allowed`
            : `text-${color}-400 bg-${color}-100 hover:bg-${color}-400 hover:text-white`
    }`,
  };
  return (
      <button
          onClick={onClick}
          className={overrideTailwindClasses(
              `${baseStyle} ${classes[variant]} ${shapes[shape]} ${className}`
          )}
          type={type}
          disabled={disabled}
      >
        {children}
        {isLoading && (
            <CircularProgress className="ml-2" size={20} color="inherit" />
        )}
      </button>
  );
};

export default Button;
