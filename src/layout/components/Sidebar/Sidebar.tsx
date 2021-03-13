import React, { useEffect, useState } from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import SidebarItem from "./SidebarItem";
import { useHistory } from "react-router-dom";
interface Props {
  isOpen: boolean;
}

const Sidebar = (props: Props) => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const history = useHistory();

  const onSelection = (menu: string) => {
    setSelectedItem(menu);
    history.push(menu);
  };

  useEffect(() => {
    setSelectedItem(history.location.pathname);
    history.listen((hist) => {
      setSelectedItem(hist.pathname);
    });
  }, []);

  return (
    <div
      className={
        props.isOpen
          ? "fixed lg:relative bg-white w-60 h-full shadow-md flex-shrink-0 soft-transition"
          : " fixed lg:relative bg-white w-60 h-full shadow-md flex-shrink-0 transition soft-transition hide-sidebar lg:show-sidebar"
      }
      style={{ zIndex: 500 }}
    >
      <SidebarItem
        icon={<AssignmentIndIcon />}
        label="Landing"
        isSelected={selectedItem === "/main/landing"}
        onClick={() => onSelection("/main/landing")}
      >
        <SidebarItem
          icon={<AssignmentIndIcon />}
          label="Landing"
          isSelected={selectedItem === "/main/landing"}
          onClick={() => onSelection("/main/landing")}
        ></SidebarItem>
        <SidebarItem
          icon={<AssignmentIndIcon />}
          label="Landing"
          isSelected={selectedItem === "/main/landing"}
          onClick={() => onSelection("/main/landing")}
        >
          <SidebarItem
            label="Landing"
            isSelected={selectedItem === "/main/landing"}
            onClick={() => onSelection("/main/landing")}
          ></SidebarItem>
          <SidebarItem
            label="Landing"
            isSelected={selectedItem === "/main/landing"}
            onClick={() => onSelection("/main/landing")}
          ></SidebarItem>
        </SidebarItem>
      </SidebarItem>
      <SidebarItem
        icon={<AssignmentIndIcon />}
        label="Example"
        isSelected={selectedItem === "/main/example"}
        onClick={() => onSelection("/main/example")}
      ></SidebarItem>
      <SidebarItem
        icon={<AssignmentIndIcon />}
        label="Profile"
        isSelected={selectedItem === "/main/profile"}
        onClick={() => onSelection("/main/profile")}
      ></SidebarItem>
      <SidebarItem icon={<AssignmentIndIcon />} label="Form">
        <SidebarItem
          label="Form example"
          isSelected={selectedItem === "/main/forms/form"}
          onClick={() => onSelection("/main/forms/form")}
        ></SidebarItem>
        <SidebarItem
          label="Steppers"
          isSelected={selectedItem === "/main/forms/steppers"}
          onClick={() => onSelection("/main/forms/steppers")}
        ></SidebarItem>
        <SidebarItem
            label="Buttons"
            isSelected={selectedItem === "/main/forms/buttons"}
            onClick={() => onSelection("/main/forms/buttons")}
        ></SidebarItem>
      </SidebarItem>
    </div>
  );
};

export default Sidebar;
