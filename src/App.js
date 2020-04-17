import React from "react";
import { Switch, BrowserRouter as Router, Route, Link } from "react-router-dom";

import ExampleOne from "./ExampleOne";
import FormScaleIn from "./examples/animation/FormScaleIn";

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <h1>Home</h1>
            <Link to="/example-1">example 1</Link>
            <Link to="/form-scale">form scale</Link>
          </Route>
          <Route path="/example-1">
            <ExampleOne />
          </Route>
          <Route path="/form-scale">
            <FormScaleIn />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
