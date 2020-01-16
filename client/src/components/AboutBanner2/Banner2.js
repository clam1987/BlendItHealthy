import React from "react";
import "../AboutBanner2/Banner2.css";
import storeFront from "../../assets/images/store_front.png"

let Banner2 = () => {
  return (
    <div className="container-fluid">
      <div className="row" id="bannerRow">
        <div className="col-sm-8" id="banner2">
          <p className="aboutUs">About Us</p>
        </div>
        {/* <div className="col-sm-4" id="eDiv"> */}
            {/* <img src={storeFront} alt="store_front" id="storeFront" /> */}
        {/* </div> */}
      </div>
      </div>
  );
};

export default Banner2;
