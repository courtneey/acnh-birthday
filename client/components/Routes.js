import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import HomePage from "./HomePage";

const Routes = () => {
  return (
    <Router>
      <main>
        <div className="title-bar">
          <h1>Animal Crossing Birthday Guide</h1>
        </div>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </main>
    </Router>
  );
};

export default Routes;
