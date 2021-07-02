import "./styles.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Home";
import Movie from "./SingleMovie";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/movies/:id">
          <Movie />
        </Route>
      </Switch>
    </Router>
  );
}
