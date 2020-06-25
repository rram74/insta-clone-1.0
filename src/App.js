import React from "react";
import "./Custom.css";
import Main from "./Containers/Layouts/Public/Main";
import User from "./Containers/Layouts/User";
import { Route, Switch } from "react-router-dom";
import {
  Home,
  Likes,
  Massages,
  Navigation,
  ProfileSettings,
  Error,
} from "./Containers/Layouts/User/Pages";
import { Provider } from "react-redux";
import Store from "./Store";

function App(props) {
  return (
    <Provider store={Store}>
      <Switch>
        <Route exact path="/" component={Main} />

        <User>
          <Switch>
            <Route exact path="/user/:username" component={Home} />
            <Route exact path="/likes" component={Likes} />
            <Route exact path="/massages" component={Massages} />
            <Route exact path="/navigation" component={Navigation} />
            <Route exact path="/profile-settings" component={ProfileSettings} />
            <Route component={Error} />
          </Switch>
        </User>
      </Switch>
    </Provider>
  );
}

export default App;
