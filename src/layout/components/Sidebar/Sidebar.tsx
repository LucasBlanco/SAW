import React, { useEffect, useState } from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import SidebarItem from "./SidebarItem";
import { useHistory } from "react-router-dom";
import {Button} from "../../../shared/components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faUser,
  faAngleDoubleLeft,
  faUserAstronaut,
  faAngleDoubleRight
} from "@fortawesome/free-solid-svg-icons";

interface Props {
  keepCollapsed: boolean
  collapseSidebar: any
  expandSidebar: any
  showCollapsedSidebar: boolean
  setShowCollapsedSidebar: any
}
interface PropsSidebarSection {
  titulo: string;
  showCollapsedSidebar: boolean
}

const SidebarSection = ({titulo, showCollapsedSidebar}: PropsSidebarSection) => {
  return (
      !showCollapsedSidebar ?
      <h1 className="mt-7 text-blueGray-700 px-5 font-semibold text-xs mb-4">{titulo}</h1>
          :       <h1 className="mt-7 text-blueGray-700 px-5 font-black text-xl mb-4 text-center">...</h1>

  )
}

const Sidebar = ({keepCollapsed, collapseSidebar, expandSidebar, showCollapsedSidebar, setShowCollapsedSidebar}: Props) => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [isMouseOver, setIsMouseOver] = useState(false)
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



  const colapsedClass = () => {
    if(keepCollapsed && isMouseOver)
      return "fixed lg:relative bg-blueGray-800 w-60 h-full shadow-md flex-shrink-0 transition soft-transition hide-sidebar lg:show-sidebar sm:hidden lg:block"
    if(keepCollapsed && !isMouseOver)
        return "fixed lg:relative bg-blueGray-800 w-20 h-full shadow-md flex-shrink-0 soft-transition sm:hidden lg:block"
    if(!keepCollapsed)
      return "fixed lg:relative bg-blueGray-800 w-60 h-full shadow-md flex-shrink-0 transition soft-transition hide-sidebar lg:show-sidebar sm:hidden lg:block"

  }

  const onMouseOver = () =>
  {
    if(keepCollapsed)
    {
      setIsMouseOver(true)
      setShowCollapsedSidebar(false)
    }
  }

  const onMouseOut = () =>
  {
    if(keepCollapsed)
    {
      setIsMouseOver(false)
      setShowCollapsedSidebar(true)
    }

  }

  return (
      <>
    <div
      className={colapsedClass()}
      style={{ zIndex: 500, backgroundColor:"#1e1e2d" }}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseOut}
    >

      <SidebarItem
        icon={<FontAwesomeIcon icon={faUser} size="1x"/>}
        label="Landing"
        showCollapsedSidebar={showCollapsedSidebar}
      >
        <SidebarItem
          icon={<AssignmentIndIcon />}
          label="Landing"
          isSelected={selectedItem === "/main/landing2"}
          onClick={() => onSelection("/main/landing2")}
          showCollapsedSidebar={showCollapsedSidebar}

        ></SidebarItem>
        <SidebarItem
          icon={<AssignmentIndIcon />}
          label="Landing"
          showCollapsedSidebar={showCollapsedSidebar}

        >
          <SidebarItem
            label="Landing"
            isSelected={selectedItem === "/main/landing4"}
            onClick={() => onSelection("/main/landing4")}
            showCollapsedSidebar={showCollapsedSidebar}

          ></SidebarItem>
          <SidebarItem
            label="Landing"
            isSelected={selectedItem === "/main/landing5"}
            onClick={() => onSelection("/main/landing5")}
            showCollapsedSidebar={showCollapsedSidebar}

          ></SidebarItem>
        </SidebarItem>
      </SidebarItem>
      <SidebarSection titulo="CUSTOM" showCollapsedSidebar={showCollapsedSidebar}
      />

      <SidebarItem
          icon={<FontAwesomeIcon icon={faAngleDoubleLeft} size="1x" />}
        label="Example"
        isSelected={selectedItem === "/main/example"}
        onClick={() => onSelection("/main/example")}
          showCollapsedSidebar={showCollapsedSidebar}

      ></SidebarItem>
      <SidebarItem
          icon={<FontAwesomeIcon icon={faUserAstronaut} size="1x" />}
        label="Profile"
        isSelected={selectedItem === "/main/profile"}
        onClick={() => onSelection("/main/profile")}
          showCollapsedSidebar={showCollapsedSidebar}

      ></SidebarItem>
      <SidebarItem
          icon={<FontAwesomeIcon icon={faUserAstronaut} size="1x" />}
          label="Form"
          showCollapsedSidebar={showCollapsedSidebar}

      >
        <SidebarItem
          label="Form example"
          isSelected={selectedItem === "/main/forms/form"}
          onClick={() => onSelection("/main/forms/form")}
          showCollapsedSidebar={showCollapsedSidebar}

        ></SidebarItem>
        <SidebarItem
          label="Steppers"
          isSelected={selectedItem === "/main/forms/steppers"}
          onClick={() => onSelection("/main/forms/steppers")}
          showCollapsedSidebar={showCollapsedSidebar}

        ></SidebarItem>
        <SidebarItem
            label="Buttons"
            isSelected={selectedItem === "/main/forms/buttons"}
            onClick={() => onSelection("/main/forms/buttons")}
            showCollapsedSidebar={showCollapsedSidebar}

        ></SidebarItem>
      </SidebarItem>
    </div>
      </>
  );
};

export default Sidebar;
