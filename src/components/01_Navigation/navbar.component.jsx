import "./navbar.styles.css";
import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import omnifood_logo from "../../images/omnifood-logo.png";

const Navbar = ({ isVisible }) => {
  const [toggleNavbar, setNavbar] = useState(false);

  return (
    <div
      className={
        "header" +
        (toggleNavbar ? " nav-open" : "") +
        (isVisible ? "" : " sticky")
      }
    >
      <a href="#">
        <img className="logo" src={omnifood_logo} alt="Omnifood logo" />
      </a>
      <nav className="main-nav">
        <ul className="main-nav-list">
          <li>
            <a
              className="main-nav-link"
              href="#"
              onClick={() => setNavbar(false)}
            >
              How it works
            </a>
          </li>
          <li>
            <a
              className="main-nav-link"
              href="#"
              onClick={() => setNavbar(false)}
            >
              Meals
            </a>
          </li>
          <li>
            <a
              className="main-nav-link"
              href="#"
              onClick={() => setNavbar(false)}
            >
              Testimonials
            </a>
          </li>
          <li>
            <a
              className="main-nav-link"
              href="#"
              onClick={() => setNavbar(false)}
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              className="main-nav-link nav-cta"
              href="#"
              onClick={() => setNavbar(false)}
            >
              Try for free
            </a>
          </li>
        </ul>
      </nav>

      <button
        onClick={() => setNavbar(!toggleNavbar)}
        className="btn-mobile-nav"
      >
        <span className="icon-open">
          <ion-icon name="menu-outline"></ion-icon>
        </span>

        <span className="icon-close">
          <ion-icon name="close-outline"></ion-icon>
        </span>
      </button>
    </div>
  );
};

export default Navbar;
