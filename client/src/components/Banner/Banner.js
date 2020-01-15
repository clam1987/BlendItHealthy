import React from "react";
import "../Banner/Banner.css";

let Banner = props => {
  return (
    <div className="container-fluid px-0">
      <div className="row bannerRow">
        <div className="col-sm-8 banner">
          <p className="bannerText" align="justify">
            <span className="firstWord">{props.h1}</span> {props.message}
          </p>
        </div>
        <div className="col-sm-4 px-0 imgCol">
          <img
            className="img-fluid bannerImg"
            src={props.image}
            alt={props.name}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
