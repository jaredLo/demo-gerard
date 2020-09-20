import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/1-header/logo.png";
import "./SideNav.css";

const SideNav = ({ setDrawerOpen }) => (
  <nav className="side-nav">
    <ul>
      <img className="sidenav-logo" src={logo} alt="logo" />
      <li>
        <Link onClick={() => setDrawerOpen(false)} to="/">
          Home
        </Link>
      </li>
      <li>
        <Link onClick={() => setDrawerOpen(false)} to="/about">
          About Us
        </Link>
      </li>
      <li>
        <Link onClick={() => setDrawerOpen(false)} to="/services">
          Services
        </Link>
      </li>
      <li>
        <Link onClick={() => setDrawerOpen(false)} to="/pricing">
          Pricing
        </Link>
      </li>
      <li>
        <Link onClick={() => setDrawerOpen(false)} to="/careers">
          Careers
        </Link>
      </li>
    </ul>
    <div className="side-nav-cancel" onClick={() => setDrawerOpen(false)}>
      &times;
    </div>
  </nav>
);

export default SideNav;
