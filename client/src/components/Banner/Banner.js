import React from "react";
import "../Banner/Banner.css"

let Banner = props => {
  return (
    <div className="container-fluid banner">
      <div className="row">
        <div className="col-sm-8 rectangle">
          <p className="bannerText"><span className="firstWord">Blend It Healthy</span> {props.message}</p>
        </div>
        <div className="col-sm-4">
          <img 
          src={props.image}
          alt={props.name} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
