import React from "react";
import { Switch, BrowserRouter as Router, Route, Link } from "react-router-dom";

import ExampleOne from "./ExampleOne";
import FormScaleIn from "./examples/animation/FormScaleIn";
import SpeedDial from "./examples/animation/FabSpeedDial";
import SliderExample from "./examples/SliderExample";
import ScrimExample from "./examples/ScrimExample";
import Resize from "./examples/Resize";
import TempPlayGround from "./TempPlayGround";
import CardExample from "./examples/CardExample";
import ScaleCard from "./examples/animation/ScaleCard";
export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <h1>Home</h1>
            <div>
              <Link to="/example-1">example 1</Link>
            </div>
            <div>
              <Link to="/form-scale">form scale</Link>
            </div>
            <div>
              <Link to="/speed-dial">speed dial</Link>
            </div>
            <div>
              <Link to="/slider">slider</Link>
            </div>
            <div>
              <Link to="/scrim">scrim</Link>
            </div>
            <div>
              <Link to="/resize">resize</Link>
            </div>
            <div>
              <Link to="/playground">TempPlayGround</Link>
            </div>
            <div>
              <Link to="/card">card</Link>
            </div>
            <div>
              <Link to="/card-scale">Scale Card</Link>
            </div>
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
          <Route path="/card">
            <CardExample />
          </Route>
          <Route path="/card-scale">
            <ScaleCard />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
