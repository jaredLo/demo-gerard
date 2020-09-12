import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/About.js";
import Home from "./pages/Home.js";
import Services from "./pages/Services.js";
import Pricing from "./pages/Pricing.js";
import Careers from "./pages/Careers.js";

import Nav from "./Nav.js";
import SideNav from "./Nav/SideNav.js";

const App = () => {
  const [isDrawerOpen, setDrawerOpen] = React.useState(false);

  let sideNav;

  if (isDrawerOpen) {
    sideNav = <SideNav setDrawerOpen={setDrawerOpen} />;
  }

  return (
    <Router>
      <div>
        <Nav setDrawerOpen={setDrawerOpen} />
        {sideNav}
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
