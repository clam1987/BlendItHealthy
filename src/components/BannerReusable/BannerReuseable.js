import React from "react";
import "../BannerReusable/BannerReuseable.css";
import BannerText from "../BannerText/BannerText";

let BannerReusable = props => {
  return (
    <>
      <div className="row reUse" style={props.style}>
        <BannerText text={props.text} />
      </div>
    </>
  );
};

export default BannerReusable;
