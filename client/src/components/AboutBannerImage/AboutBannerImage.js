import React from "react";
import "../AboutBannerImage/AboutBannerImage.css";
import storeFront from "../../assets/images/store_front.png";
import storeInside from "../../assets/images/store_inside.png";

let AboutBannerImage = () => {
  return (
    <>
      <img
        className="img-fluid"
        src={storeFront}
        alt="store_front"
        id="storeFront"
      />
      <img
        className="img-fluid"
        src={storeInside}
        alt="store_inside"
        id="storeInside"
      />
    </>
  );
};

export default AboutBannerImage;
