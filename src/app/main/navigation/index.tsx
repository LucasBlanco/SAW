import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { MainPage } from "app/main/pages";
import { PublicationNavigation } from "../publication/navigation";
import { UserNavigation } from "../user/navigation";

export const MainNavigation = () => {
  let { path } = useRouteMatch();
  return (
    <MainPage>
      <Switch>
        <Route path={`${path}/publication`}>
          <PublicationNavigation />
        </Route>
        <Route path={`${path}/user`}>
          <UserNavigation />
        </Route>
      </Switch>
    </MainPage>
  );
};
