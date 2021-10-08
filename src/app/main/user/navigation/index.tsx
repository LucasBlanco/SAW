import { useSuperQuery } from "@vadiun/react-hooks";
import { UserRole } from "app/auth/models";
import { useAuthService } from "app/auth/services";
import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { UserListPage } from "../pages/UserListPage";

export const UserNavigation = () => {
  const authSrv = useAuthService();
  const userQuery = useSuperQuery(authSrv.getLoggedUser);
  let { path } = useRouteMatch();

  let AllowedRoutes: React.ReactNode = null;
  if (userQuery.data !== undefined && userQuery.data.role === UserRole.ADMIN) {
    AllowedRoutes = (
      <>
        <Route path={`${path}/list`}>
          <UserListPage />
        </Route>
      </>
    );
  }

  return <Switch>{AllowedRoutes}</Switch>;
};
