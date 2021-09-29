import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { FormExamplePage, FormSteppersPage } from "app/main/forms/pages";
import { ButtonsExample } from "app/main/example/pages";

export const FormsNavigation = () => {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/steppers`}>
        <FormSteppersPage />
      </Route>
      <Route path={`${path}/buttons`}>
        <ButtonsExample />
      </Route>
      <Route exact path={`${path}`}>
        <FormExamplePage />
      </Route>
    </Switch>
  );
};
