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
interface Props {}

const MainLayout = (props: Props) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  return (
    <div className="min-h-screen">
      <Header toggleSidebar={() => setIsSideBarOpen((isOpen) => !isOpen)} />
      <div
        style={{ height: "calc(100vh - 4rem - 2px)" }}
        className="overflow-auto"
      >
        <div className="flex h-full">
          <Sidebar isOpen={isSideBarOpen} />
          <div
            className="bg-grey-100 h-full w-full overflow-auto"
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
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
