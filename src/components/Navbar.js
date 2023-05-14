import { Link } from "gatsby";
import React, { useState } from "react";
import MobileNav from "./MobileNav";
import Logo from "../images/ecotechtextlogo.svg";
import Hamburger from "../images/hamburger.svg";
import X from "../images/x.svg";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <>
      <nav className="nav-container" aria-label="Main menu">
        <Link to="/" className="logo-container">
          <img
            src={Logo}
            alt="Ecotech logo"
            className="logo"
            width="366"
            height="126"
          />
        </Link>

        <div className="nav-menu">
          <Link to="/services" className="nav-link" activeClassName="active">
            Services
          </Link>
          <Link to="/contact" className="nav-call-to-action">
            Get in Touch
          </Link>
        </div>

        <button
          onClick={handleToggle}
          className="hamburger-button"
          aria-label="Open the menu"
        >
          <img
            src={navbarOpen ? X : Hamburger}
            height="40"
            width="40"
            alt="menu button"
            className="hamburger"
          />
        </button>
      </nav>
      <nav className="mobile-nav-container">
        {navbarOpen ? <MobileNav /> : ""}
      </nav>
    </>
  );
}
