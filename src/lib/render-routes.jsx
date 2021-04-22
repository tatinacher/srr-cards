import * as React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { AddCard } from "../pages/add-card";
import { Cards } from "../pages/cards";

const routes = [
  { path: "/", render: <Cards />, exact: true },
  { path: "/add-card", render: <AddCard />, exact: true },
];

export const Routes = () => (
  <Switch>
    {routes.map(({ path, exact, render }) => (
      <Route key={path} exact={exact} path={path} render={() => render} />
    ))}
    <Redirect to="/" />
  </Switch>
);
