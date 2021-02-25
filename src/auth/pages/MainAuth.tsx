import React from "react";
import { Route, Switch } from "react-router-dom";
import ChangePasswordPage from "./ChangePasswordPage";
import ForgotPasswordPage from "./ForgotPasswordPage";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import VerifyEmailPage from "./VerifyEmailPage";

interface Props {}

const MainAuth = (props: Props) => {
  return (
    <Switch>
      <Route path="/auth/login">
        <LoginPage />
      </Route>
      <Route path="/auth/register">
        <RegisterPage />
      </Route>
      <Route path="/auth/forgot-password">
        <ForgotPasswordPage />
      </Route>
      <Route path="/auth/change-password">
        <ChangePasswordPage />
      </Route>
      <Route path="/auth/verify-email">
        <VerifyEmailPage />
      </Route>
    </Switch>
  );
};

export default MainAuth;
