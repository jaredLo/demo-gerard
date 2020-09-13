import React from "react";
import { Link } from "react-router-dom";
import logo from "./assets/1-header/logo.png";
import search from "./assets/7-icons/search.svg";
import "./nav.css";
import SideNavButton from "./Nav/SideNavButton";

const Nav = ({ setDrawerOpen }) => {
  return (
    <header className="navbar">
      <div className="sidenav-container" onClick={() => setDrawerOpen(true)}>
        <SideNavButton />
      </div>
      <nav className="navbar-navigation">
        <Link to="/">
          <img className="navbar-logo" src={logo} alt="logo" />
        </Link>
        <div className="navbar-navigation-items">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/careers">Careers</Link>
            </li>
          </ul>
        </div>
        <img className="search" src={search} alt="search" />
      </nav>
    </header>
  );
};

export default Nav;
