import CrudExample from "example/pages/CrudExample";
import FormExamplePage from "forms/pages/FormExamplePage";
import FormSteppersPage from "forms/pages/FormSteppersPage";
import Header from "layout/components/Header";
import Sidebar from "layout/components/Sidebar/Sidebar";
import ProfilePage from "profile/pages/ProfilePage";
import React from "react";
import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./Landing";
import ButtonsExample from "../../example/pages/ButtonsExample";
import {Button} from "../../shared/components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDoubleLeft, faAngleDoubleRight} from "@fortawesome/free-solid-svg-icons";
interface Props {}

const MainLayout = (props: Props) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    const [keepCollapsed, setKeepCollapsed] = useState(false)
    const [showCollapsedSidebar, setShowCollapsedSidebar] = useState(false)
    const collapseSidebar = () => {
        setKeepCollapsed(true)
        setShowCollapsedSidebar(true)
    }

    const expandSidebar = () => {
        setKeepCollapsed(false)
        setShowCollapsedSidebar(false)
    }
  return (
      <div className="min-h-screen">
          <div
              style={{ height: "100vh" }}
              className="overflow-auto"
          >
              <div className="flex h-full">
                  <div>
                      <div className="h-16 bg-blueGray-900 flex justify-around items-center lg:flex sm:hidden" style={{backgroundColor:"#1a1a27"}}>
                          <h1 className={showCollapsedSidebar ? "hidden" : "font-black text-lg text-gray-50"} >METRONIC</h1>

                          <button className="text-primary-600 focus:outline-none" onClick={() => keepCollapsed ? expandSidebar() : collapseSidebar()}>
                              {keepCollapsed ? <FontAwesomeIcon icon={faAngleDoubleRight} size="2x"/>
                                  : <FontAwesomeIcon icon={faAngleDoubleLeft} size="2x"/>}
                          </button>

                      </div>
                      <Sidebar
                          keepCollapsed={keepCollapsed}
                          collapseSidebar={collapseSidebar}
                          expandSidebar={expandSidebar}
                          showCollapsedSidebar={showCollapsedSidebar}
                          setShowCollapsedSidebar={setShowCollapsedSidebar}
                      />
                  </div>

                  <div
                      className="bg-gray-100 h-full w-full overflow-auto"
                      onClick={() => setIsSideBarOpen(false)}
                  >
                      <Header toggleSidebar={() => setIsSideBarOpen((isOpen) => !isOpen)} />
                      <div className="bg-gray">

                      </div>
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
  )
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
