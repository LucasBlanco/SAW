import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import MainLayout from "layout/pages/MainLayout";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#ec4899",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/login"></Route>
          <Route path="/forgot-password"></Route>
          <Route path="/main" render={(props) => <MainLayout {...props} />} />
          <Redirect to="/main/landing" />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
