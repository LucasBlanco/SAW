import React from "react";
import { useAuthService } from "app/auth/services";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import {
  ChangePasswordPage,
  ForgotPasswordPage,
  LoginPage,
  RegisterPage,
  VerifyEmailPage,
} from "app/auth/pages";

interface Props {}

export const MainNavigation = (props: Props) => {
  const authSrv = useAuthService();
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/login`}>
        <LoginPage authSrv={authSrv} />
      </Route>
      <Route path={`${path}/register`}>
        <RegisterPage />
      </Route>
      <Route path={`${path}/forgot-password`}>
        <ForgotPasswordPage authSrv={authSrv} />
      </Route>
      <Route path={`${path}/change-password`}>
        <ChangePasswordPage />
      </Route>
      <Route path={`${path}/verify-email`}>
        <VerifyEmailPage />
      </Route>
    </Switch>
  );
};
