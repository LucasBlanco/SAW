import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { ModalExample, CrudExample } from "../pages";

export const ExampleNavigation = () => {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/modal`}>
        <ModalExample />
      </Route>
      <Route path={`${path}`}>
        <CrudExample />
      </Route>
    </Switch>
  );
};
