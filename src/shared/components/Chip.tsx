import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Chip = (props: Props) => {
  const className = props.className || "";

  return (
    <div
      className={
        "rounded-2xl text-white px-3 py-2 text-sm bg-primary-500 " + className
      }
    >
      {props.children}
    </div>
  );
};

export default Chip;
