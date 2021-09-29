import React from "react";
import Landing from "layout/pages/Landing";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { ProfilePage } from "app/main/profile/pages";
import { MainPage } from "app/main/pages";
import { ExampleNavigation } from "app/main/example/navigation";
import { FormsNavigation } from "app/main/forms/navigation";

export const MainNavigation = () => {
  let { path } = useRouteMatch();

  return (
    <MainPage>
      <Switch>
        <Route path={`${path}/example`}>
          <ExampleNavigation />
        </Route>
        <Route path={`${path}/forms`}>
          <FormsNavigation />
        </Route>
        <Route path={`${path}/landing`}>
          <Landing />
        </Route>
        <Route path={`${path}/profile`}>
          <ProfilePage />
        </Route>
      </Switch>
    </MainPage>
  );
};
