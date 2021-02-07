import AdCreate from "ad/pages/AdCreate";
import AdPage from "ad/pages/AdPage";
import Ads from "ad/pages/Ads";
import MyAds from "ad/pages/MyAds";
import LoginPage from "auth/pages/LoginPage";
import Header from "layout/components/Header";
import Profile from "profile/pages/Profile";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Landing from "./Landing";
interface Props {}

const MainLayout = (props: Props) => {
  return (
    <div className=" min-h-screen">
      <Header />
      <div style={{ height: "calc(100vh - 4rem)" }} className="overflow-auto">
        <Switch>
          <Route path="/main/landing">
            <Landing />
          </Route>
          <Route path="/main/ads">
            <Ads />
          </Route>
          <Route path="/main/profile">
            <Profile />
          </Route>
          <Route path="/main/create-ad">
            <AdCreate />
          </Route>
          <Route path="/main/my-ads">
            <MyAds />
          </Route>
          <Route path="/main/ad-page">
            <AdPage />
          </Route>
          <Route path="/main/login">
            <LoginPage />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default MainLayout;
