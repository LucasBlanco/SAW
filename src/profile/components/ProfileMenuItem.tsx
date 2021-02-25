import React from "react";
import { overrideTailwindClasses } from "tailwind-override";

interface Props {
  icon: React.ReactNode;
  label: React.ReactNode;
  isSelected?: boolean;
  value: any;
  onClick?: () => void;
}

const ProfileMenuItem = (props: Props) => {
  return (
    <div
      className={overrideTailwindClasses(
        ` hover:text-primary-600 hover:bg-primary-100 soft-transition p-4 rounded-md my-2 cursor-pointer flex space-x-4 items-center ${
          props.isSelected ? "text-primary-600 bg-primary-100" : "text-grey-700"
        }`
      )}
      onClick={props.onClick}
    >
      {props.icon}
      <span className="font-semibold text-md">{props.label}</span>
    </div>
  );
};

export default ProfileMenuItem;
