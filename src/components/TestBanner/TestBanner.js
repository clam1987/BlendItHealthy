import React from "react";
import "../TestBanner/TestBanner.css";

let TestBanner = props => {
  return (
    <>
      <img src={props.img} alt={props.name} id="testBanner" />
    </>
  );
};

export default TestBanner;
