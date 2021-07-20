import React, { useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import MainLayout from "layout/pages/MainLayout";
import { Backdrop, createMuiTheme, ThemeProvider } from "@material-ui/core";
import LoginPage from "auth/pages/LoginPage";
import MainAuth from "auth/pages/MainAuth";
import { AuthContext, AuthProvider, useAuth } from "auth/services/AuthService";
import CircularProgress from "@material-ui/core/CircularProgress";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core/styles";
import {
  MessageProvider,
  SnackbarProvider,
  SpinnerProvider,
} from "@vadiun/react-hooks";
import { Message, Snackbar, Spinner } from "@vadiun/react-components";
import { SnackbarProvider as NotiStackProvider } from "notistack";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: 10000000,
      color: "#fff",
    },
  })
);

function App() {
  const classes = useStyles();
  const theme = createMuiTheme({
    typography: {
      fontFamily: `"Poppins", sans-serif`,
    },
    palette: {
      primary: {
        main: "#37bdf8",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <NotiStackProvider>
        <SpinnerProvider component={Spinner}>
          <MessageProvider component={Message}>
            <SnackbarProvider component={Snackbar}>
              <AuthProvider>
                <AuthContext.Consumer>
                  {({ isAuthenticated }) => (
                    <Switch>
                      <Route
                        path="/auth"
                        render={(props) => <MainAuth {...props} />}
                      />
                      {!isAuthenticated && <Redirect to="/auth/login" />}
                      <Route
                        path="/main"
                        render={(props) => <MainLayout {...props} />}
                      />
                      <Redirect to="/main/landing" />
                    </Switch>
                  )}
                </AuthContext.Consumer>
              </AuthProvider>
            </SnackbarProvider>
          </MessageProvider>
        </SpinnerProvider>
      </NotiStackProvider>
    </ThemeProvider>
  );
}

export default App;
