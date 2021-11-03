import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import SingleMonth from "./SingleMonth";

const Routes = () => {
  return (
    <Router>
      <main>
        <div className="title-bar">
          <h1>Animal Crossing Birthday Guide</h1>
        </div>
        <Switch>
          <Route path="/villagers" component={SingleMonth} />
          <Route exact path="/" component={HomePage} />
        </Switch>
      </main>
    </Router>
  );
};

export default Routes;
