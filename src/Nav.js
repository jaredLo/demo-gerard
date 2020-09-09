import React from "react";
import { Link } from "react-router-dom";
import logo from "./assets/1-header/logo.png";
import search from "./assets/7-icons/search.svg";

function Nav() {
  return (
    <div className="nav-bg">
      <nav>
        <Link to="/">
          <img className="logo" src={logo} alt="logo" />
        </Link>
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
        <img className="search" src={search} alt="search" />
      </nav>
    </div>
  );
}

export default Nav;
