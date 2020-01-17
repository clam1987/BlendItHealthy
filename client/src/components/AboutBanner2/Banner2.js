import React from "react";
import "../AboutBanner2/Banner2.css";
import storeFront from "../../assets/images/store_front.png"

let Banner2 = (props) => {
  return (
    <div className="container-fluid">
      <div className="row" id="bannerRow">
        <div className="col-sm-8" id="banner2">
        <p className="aboutUs">{props.text}</p>
        </div>
      </div>
      </div>
  );
};

export default Banner2;
