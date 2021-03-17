import CrudExample from "example/pages/CrudExample";
import FormExamplePage from "forms/pages/FormExamplePage";
import FormSteppersPage from "forms/pages/FormSteppersPage";
import Header from "layout/components/Header";
import Sidebar, { SideBarStatus } from "layout/components/Sidebar/Sidebar";
import ProfilePage from "profile/pages/ProfilePage";
import React, { useEffect } from "react";
import { useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Landing from "./Landing";
import ButtonsExample from "../../example/pages/ButtonsExample";
import { Button } from "../../shared/components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/logo.png";
import SidebarHeader from "../components/Sidebar/SidebarHeader";
import useResponsiveBreakpoint from "shared/hooks/useResponsiveBreakpoint";

interface Props {}

const MainLayout = (props: Props) => {
  const breakpoint = useResponsiveBreakpoint();
  const [sidebarStatus, setSidebarStatus] = useState<SideBarStatus>({
    platform: "desktop",
    status: "expanded",
  });

  useEffect(() => {
    if (breakpoint === "xs" || breakpoint === "sm" || breakpoint === "md") {
      setSidebarStatus((status) => {
        if (status.platform === "desktop")
          return { platform: "mobile", status: "closed" };
        return status;
      });
      return;
    }
    setSidebarStatus((status) => {
      if (status.platform === "mobile")
        return { platform: "desktop", status: "expanded" };
      return status;
    });
  }, [breakpoint]);

  function dismissVisibleSidebar() {
    if (sidebarStatus.platform === "mobile") {
      setSidebarStatus({ platform: "mobile", status: "closed" });
    }
  }

  function toggleCollapse() {
    if ((sidebarStatus.platform = "desktop")) {
      setSidebarStatus((status) =>
        status.status === "expanded"
          ? { platform: "desktop", status: "collapsed" }
          : { platform: "desktop", status: "expanded" }
      );
    }
  }

  return (
    <div className="min-h-screen">
      <div style={{ height: "100vh" }} className="overflow-auto">
        <div className="flex h-full">
          <Sidebar status={sidebarStatus} toggleCollapse={toggleCollapse} />

          <div
            className="h-full w-full overflow-auto"
            onClick={dismissVisibleSidebar}
            style={{ backgroundColor: "#eaedf5" }}
          >
            <Header
              toggleSidebar={(
                e: React.MouseEvent<HTMLButtonElement, MouseEvent>
              ) => {
                setSidebarStatus({ platform: "mobile", status: "open" });
                e.stopPropagation();
              }}
            />
            <div className="bg-blueGray-100"></div>
            <Switch>
              <Route path="/main/landing">
                <Landing />
              </Route>
              <Route path="/main/example">
                <CrudExample />
              </Route>
              <Route path="/main/profile">
                <ProfilePage />
              </Route>
              <Route path="/main/forms/form">
                <FormExamplePage />
              </Route>
              <Route path="/main/forms/steppers">
                <FormSteppersPage />
              </Route>
              <Route path="/main/forms/buttons">
                <ButtonsExample />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
  /*return (
    <div className="min-h-screen">
      <Header toggleSidebar={() => setIsSideBarOpen((isOpen) => !isOpen)} />
      <div
        style={{ height: "calc(100vh - 4rem - 2px)" }}
        className="overflow-auto"
      >
        <div className="flex h-full">
          <Sidebar isOpen={isSideBarOpen} />
          <div
            className="bg-gray-100 h-full w-full overflow-auto"
            onClick={() => setIsSideBarOpen(false)}
          >
            <Switch>
              <Route path="/main/landing">
                <Landing />
              </Route>
              <Route path="/main/example">
                <CrudExample />
              </Route>
              <Route path="/main/profile">
                <ProfilePage />
              </Route>
              <Route path="/main/forms/form">
                <FormExamplePage />
              </Route>
              <Route path="/main/forms/steppers">
                <FormSteppersPage />
              </Route>
              <Route path="/main/forms/buttons">
                <ButtonsExample />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );*/
};

export default MainLayout;
