import React from "react";
import { Switch, BrowserRouter as Router, Route, Link } from "react-router-dom";

import ExampleOne from "./ExampleOne";
import FormScaleIn from "./examples/animation/FormScaleIn";
import SpeedDial from "./examples/animation/FabSpeedDial";
import SliderExample from "./examples/SliderExample";
import ScrimExample from "./examples/ScrimExample";
import Resize from "./examples/Resize";
import TempPlayGround from "./TempPlayGround";
export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <h1>Home</h1>
            <Link to="/example-1">example 1</Link>
            <Link to="/form-scale">form scale</Link>
            <Link to="/speed-dial">speed dial</Link>
            <Link to="/slider">slider</Link>
            <Link to="/scrim">scrim</Link>
            <Link to="/resize">resize</Link>
            <Link to="/playground">TempPlayGround</Link>
          </Route>
          <Route path="/example-1">
            <ExampleOne />
          </Route>
          <Route path="/form-scale">
            <FormScaleIn />
          </Route>
          <Route path="/speed-dial">
            <SpeedDial />
          </Route>
          <Route path="/slider">
            <SliderExample />
          </Route>
          <Route path="/scrim">
            <ScrimExample />
          </Route>
          <Route path="/resize">
            <Resize />
          </Route>
          <Route path="/playground">
            <TempPlayGround />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
