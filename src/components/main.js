import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import Homepage from "./homepage";
import Const_manager from "./privacyPolicy/construction_manager";
const Main = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route
          exact
          path="/PrivacyPolicy/Construction_Manager"
          component={Const_manager}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Main;
