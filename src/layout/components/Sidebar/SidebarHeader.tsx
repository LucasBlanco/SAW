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
    showCollapsedSidebar: boolean
    keepCollapsed: boolean
    expandSidebar:any
    collapseSidebar:any
    title?: string
    logo?: any
}


const SidebarHeader = ({showCollapsedSidebar, keepCollapsed, collapseSidebar, expandSidebar, title, logo}: Props) => {
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    return (
        <div className="h-16 bg-blueGray-900 flex justify-around items-center lg:flex sm:hidden" style={{backgroundColor:"#1a1a27"}}>
            {title ? <h1 className={showCollapsedSidebar ? "hidden" : "font-black text-lg text-gray-50"} >{title}</h1> : null}
            {logo ? <img
                src={logo}
                width="100px"
                className={showCollapsedSidebar ? "hidden" : "font-black text-lg text-gray-50 cursor-pointer"}
                onClick={() => history.push("/main/landing")}
            /> : null}
            <button className="text-primary-600 focus:outline-none" onClick={() => keepCollapsed ? expandSidebar() : collapseSidebar()}>
                {keepCollapsed ? <FontAwesomeIcon icon={faAngleDoubleRight} size="2x"/>
                    : <FontAwesomeIcon icon={faAngleDoubleLeft} size="2x"/>}
            </button>

        </div>


    );
};

export default SidebarHeader;
