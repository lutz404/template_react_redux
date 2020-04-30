import React from "react";
import { Switch, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

//import { PersistGate } from 'redux-persist/integration/react';

import history from "./history";

import Private from "./private";
import Guest from "./guest";

import Main from "../pages/Main";
import Home from "../pages/Home";

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/" component={Main} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
