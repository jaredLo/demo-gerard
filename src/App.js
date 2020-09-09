import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/About.js";
import Home from "./pages/Home.js";
import Services from "./pages/Services.js";
import Pricing from "./pages/Pricing.js";
import Careers from "./pages/Careers.js";

import Nav from "./Nav.js";

const App = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/pricing">
            <Pricing />
          </Route>
          <Route path="/careers">
            <Careers />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
