import React, { FC } from "react";

interface Props {
  label: string;
  isSelected: boolean;
  onSelect: (label: string) => void;
}

const ProfileMenuItem: FC<Props> = (props: Props) => {
  return (
    <button
      onClick={() => props.onSelect("personal")}
      className={
        props.isSelected
          ? " text-white transition duration-300 ease-in-out hover:bg-primary-400  py-5 px-4 whitespace-nowrap w-full focus:outline-none bg-primary-400"
          : " text-white transition duration-300 ease-in-out hover:bg-primary-400  py-5 px-4 whitespace-nowrap w-full focus:outline-none"
      }
    >
      {props.label}
    </button>
  );
};

export default ProfileMenuItem;
