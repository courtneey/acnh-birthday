import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import SingleMonth from "./SingleMonth";
import SingleVillager from "./SingleVillager";

const Routes = () => {
  return (
    <Router>
      <main>
        <div className="title-bar">
          <h1>Animal Crossing Birthday Guide</h1>
          <Link to="/">
            <img src="./images/home-icon.png" style={{ width: 50 }} />
          </Link>
        </div>
        <Switch>
          <Route path="/villagers/:id" component={SingleVillager} />
          <Route path="/villagers" component={SingleMonth} />
          <Route exact path="/" component={HomePage} />
        </Switch>
      </main>
    </Router>
  );
};

export default Routes;
