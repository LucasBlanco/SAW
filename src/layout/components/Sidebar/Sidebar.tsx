import React, { useEffect, useState } from "react";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import SidebarItem from "./SidebarItem";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faAngleDoubleLeft,
  faUserAstronaut,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";
import SidebarHeader from "./SidebarHeader";
import Logo from "../../../assets/logo.png";

export type SideBarStatus =
  | {
      platform: "mobile";
      status: "open" | "closed";
    }
  | {
      platform: "desktop";
      status: "collapsed" | "expanded";
    };
interface Props {
  status: SideBarStatus;
  toggleCollapse: () => void;
}
interface PropsSidebarSection {
  titulo: string;
  isCollapsed: boolean;
}

const SidebarSection = ({ titulo, isCollapsed }: PropsSidebarSection) => {
  return (
    <h1 className="mt-7 text-blueGray-700 px-8 font-semibold text-xs mb-4">
      {!isCollapsed ? titulo : <FontAwesomeIcon icon={faEllipsisH} size="1x" />}
    </h1>
  );
};

const Sidebar = ({ status, toggleCollapse }: Props) => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [isTemporarilyExpanded, setIsTemporarilyExpanded] = useState(false);
  const history = useHistory();
  const isCollapsed =
    status.platform === "desktop" &&
    status.status === "collapsed" &&
    !isTemporarilyExpanded;

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
    const baseClass =
      "bg-blueGray-800 min-h-full shadow-md flex-shrink-0 transition-all duration-300 ease-in-out";
    if (status.platform === "mobile") {
      const mobileBaseClass = `${baseClass} fixed`;
      const mobileClosedClass = `${mobileBaseClass} hidden hide-sidebar`;
      return status.status === "closed" ? mobileClosedClass : mobileBaseClass;
    }
    if (status.platform === "desktop") {
      const desktopBaseClass = `${baseClass} block show-sidebar relative`;
      const desktopCollapsedClass = `${desktopBaseClass} w-20`;
      const desktopExpandedClass = `${desktopBaseClass} w-60`;
      return !isCollapsed ? desktopExpandedClass : desktopCollapsedClass;
    }
  };

  const onMouseOver = () => {
    if (status.platform === "desktop" && status.status === "collapsed") {
      setIsTemporarilyExpanded(true);
    }
  };

  const onMouseOut = () => {
    if (status.platform === "desktop" && status.status === "collapsed") {
      setIsTemporarilyExpanded(false);
    }
  };

  return (
    <>
      <div
        className={colapsedClass()}
        style={{ zIndex: 500, backgroundColor: "#1e1e2d" }}
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseOut}
      >
        <SidebarHeader
          toggleCollapse={toggleCollapse}
          isCollapsed={isCollapsed}
          isMobile={status.platform === "mobile"}
          logo={Logo}
        />
        <SidebarItem
          icon={<FontAwesomeIcon icon={faUser} size="1x" />}
          label="Landing"
          isCollapsed={isCollapsed}
          redirectTo="/main/landing"
        />
        <SidebarItem
          icon={<FontAwesomeIcon icon={faUser} size="1x" />}
          label="Landing2"
          isCollapsed={isCollapsed}
        >
          <SidebarItem
            icon={<FontAwesomeIcon icon={faUser} size="1x" />}
            label="Landing2"
            isCollapsed={isCollapsed}
          >
            <SidebarItem
              icon={<FontAwesomeIcon icon={faUser} size="1x" />}
              label="Landing2"
              isCollapsed={isCollapsed}
              redirectTo="/main/landing"
            />
          </SidebarItem>
        </SidebarItem>
        <SidebarSection titulo="CUSTOM" isCollapsed={isCollapsed} />

        <SidebarItem
          icon={<FontAwesomeIcon icon={faAngleDoubleLeft} size="1x" />}
          label="Example"
          isSelected={selectedItem === "/main/example"}
          redirectTo="/main/example"
          isCollapsed={isCollapsed}
        />
        <SidebarItem
          icon={<FontAwesomeIcon icon={faUserAstronaut} size="1x" />}
          label="Profile"
          isSelected={selectedItem === "/main/profile"}
          redirectTo="/main/profile"
          isCollapsed={isCollapsed}
        />
        <SidebarItem
          icon={<FontAwesomeIcon icon={faUserAstronaut} size="1x" />}
          label="Form"
          isCollapsed={isCollapsed}
          redirectTo="/main/forms/form"
        />
      </div>
    </>
  );
};

export default Sidebar;
