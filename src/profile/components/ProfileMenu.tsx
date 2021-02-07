import React, { useState } from "react";
import ProfileMenuItem from "./ProfileMenuItem";

export type MenuItem = "personal" | "contact" | "profile";
interface Props {
  menuItemSelected: MenuItem;
  onSelect: (item: MenuItem) => void;
}

const ProfileMenu = (props: Props) => {
  return (
    <div className="bg-primary-500 text-white font-bold w-64 h-full">
      <ProfileMenuItem
        label="Personal information"
        onSelect={() => props.onSelect("personal")}
        isSelected={props.menuItemSelected === "personal"}
      />
      <ProfileMenuItem
        label="Contact information"
        onSelect={() => props.onSelect("contact")}
        isSelected={props.menuItemSelected === "contact"}
      />
      <ProfileMenuItem
        label="Profile Description"
        onSelect={() => props.onSelect("profile")}
        isSelected={props.menuItemSelected === "profile"}
      />
    </div>
  );
};

export default ProfileMenu;
