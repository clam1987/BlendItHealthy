import React from "react";
import header from "../../assets/images/Navbar/Logo/BIH.png"
import "../Nav/Nav.css";

let Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand" href="/">
        <img className="img-fluid bannerImage" src={header} />
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
            <a className="nav-link" href="#">
              MENU <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/aboutus" id="aboutMe">
              ABOUT US
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              INGREDIENTS
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              PROGRAMS
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              RESOURCES
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
