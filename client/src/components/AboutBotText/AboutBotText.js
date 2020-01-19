import React from "react";
import "../AboutBotText/AboutBotText.css";
// Temp banner image
import pic from "../../assets/images/BIH_logo.png";

let AboutBotText = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm" id="botImgDiv">
          <p className="aboutBotText">
            The lives of Emily and Albert took an unexpected turn in 2009 when
            Emily was diagnosed with breast cancer. The shock of the news
            prompted Albert to research on how best to manage his wife's health.
            It became very apparent that nutrition is of the utmost importance.
            In his research, he found the best nutrition comes from fruits and
            vegetables. This knowledge in spired them to share their vision of
            health and wellness.
          </p>
          <p className="aboutBotText">
            So in 2014, <img src={pic} alt="" id="botImg" /> was born. Since
            then, we have cultivated a community of passionate individuals -
            encouraging them on their health journeys as they embrace food as a
            preventive medicine.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutBotText;
