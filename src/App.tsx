import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import MainLayout from "layout/pages/MainLayout";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import MainAuth from "app/auth/pages/MainAuth";
import { AuthContext, AuthProvider } from "app/auth/services/AuthService";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core/styles";
import {
  MessageProvider,
  SnackbarProvider,
  SpinnerProvider,
} from "@vadiun/react-hooks";
import { Message, Snackbar, Spinner } from "@vadiun/react-components";
import { SnackbarProvider as NotiStackProvider } from "notistack";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import moment from "moment";
import "moment/locale/es";
moment.locale("es");

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
      secondary: {
        main: "#37bdf8",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <MuiPickersUtilsProvider utils={MomentUtils}>
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
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
}

export default App;
