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
import { SnackbarProvider } from "notistack";
import {
  SpinnerContext,
  SpinnerProvider,
} from "shared/services/spinner-service";
import { AuthContext, AuthProvider, useAuth } from "auth/services/AuthService";
import CircularProgress from "@material-ui/core/CircularProgress";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core/styles";
import { RequestProvider } from "shared/services/request-service";

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
      <SnackbarProvider maxSnack={3}>
        <SpinnerProvider>
          <RequestProvider>
            <SpinnerContext.Consumer>
              {(context) => (
                <Backdrop open={context.isLoading} className={classes.backdrop}>
                  <div className="flex bg-white space-x-4 p-4 font-bold text-gray-600 rounded-md items-center">
                    <span>Cargando</span>
                    <CircularProgress color="primary" size={30} />
                  </div>
                </Backdrop>
              )}
            </SpinnerContext.Consumer>

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
          </RequestProvider>
        </SpinnerProvider>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
