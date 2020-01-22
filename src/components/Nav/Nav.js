import React from "react";
import header from "../../assets/images/Navbar/Logo/BIH.png";
import "../Nav/Nav.css";

let Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand" href="/">
        <img className="img-fluid bannerImage" src={header} alt="img" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="/menu">
              MENU <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              href="/aboutus"
              id="aboutMe"
            >
              OUR STORY
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="/aboutus">
                ABOUT US
              </a>
              <a className="dropdown-item" href="/testimonials">
                TESTIMONIALS
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/ingredients">
              INGREDIENTS
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/programs">
              PROGRAMS
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/resources">
              RESOURCES
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
