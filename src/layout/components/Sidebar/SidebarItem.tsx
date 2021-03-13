import React, { FC, useEffect, useState } from "react";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
interface Props {
  icon?: React.ReactNode;
  label: string;
  onClick?: () => void;
  isSelected?: boolean;
  isOpen?: boolean;
  onChildOpened?: (x: boolean) => void;
}

const SidebarItem: FC<Props> = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => {
    setIsOpen((open) => !open);
    props.onClick && props.onClick();
  };

  useEffect(() => {
    if (props.isOpen !== undefined) {
      setIsOpen(props.isOpen);
    }
  }, [props.isOpen]);

  return (
    <>
      <div
        className={
          "flex m-4 hover:text-primary-600 cursor-pointer items-center " +
          (props.isSelected ? "text-primary-600" : "text-gray-500")
        }
        onClick={onClick}
      >
        {props.icon ? (
          <div className="w-4">{props.icon}</div>
        ) : (
          <FiberManualRecordIcon style={{ width: 8 }} />
        )}
        <h1 className="ml-4 text-md">{props.label}</h1>

        {isOpen
          ? props.children && (
              <ExpandMoreIcon style={{ width: 20, marginLeft: "auto" }} />
            )
          : props.children && (
              <NavigateNextIcon style={{ width: 20, marginLeft: "auto" }} />
            )}
      </div>
      <div
        className="pl-8 transition-all duration-500 ease-in-out overflow-hidden"
        style={{ maxHeight: isOpen ? 500 : 0 }}
      >
        {props.children}
      </div>
    </>
  );
};

export default SidebarItem;
