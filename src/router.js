import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import AllQuiz from "./hoc/AllQuiz/AllQuiz";
import StatisticsQuiz from "./hoc/StatisticsQuiz/StatisticsQuiz";
import Sidebar from "./hoc/Sidebar/Sidebar";

const NavRoute = ({ exact, path, component: Component }) => (
  <Route
    exact={exact}
    path={path}
    render={(props) => (
      <div className="NavRoute">
        <Sidebar />
        <Component {...props} />
      </div>
    )}
  />
);

export const useRoutes = (isUser) => {
  if (isUser) {
    return (
      <Switch>
        <Route path="/auth" component={Auth} />
        <NavRoute exact path="/AllQuiz" component={AllQuiz} />
        <NavRoute exact path="/StatisticsQuiz" component={StatisticsQuiz} />
        <Redirect from="/" to="/AllQuiz" />
        {/* <Route path="/quiz/:id" component={Quiz} /> */}
      </Switch>
    );
  } else {
    return (
      <Switch>
        <Route path="/auth" component={Auth} />
        <Redirect from="/" to="/auth" />
      </Switch>
    );
  }
};
