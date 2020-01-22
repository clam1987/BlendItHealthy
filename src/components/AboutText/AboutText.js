import React from "react";
import "../../components/AboutText/AboutText.css";

let AboutText = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-6" id="textContainer">
          <p className="aboutUsText">
            On a quest to find source of nutrient-rich foods, we discovered that
            establishments claiming to be health-conscious were not providing
            100% truly natural products that we seeked.
          </p>
          <p className="aboutUsText">
            Blend It Healthy was created as a response to this discovery in
            order to provide access to true nourishment. We are an honest
            business that keeps the well-being of our customers in mind when
            serving our nutritious freshly made drinks, free from artificial
            additivies and full of integrity.
          </p>
          <p className="aboutUsText" id="bottomMargin">
            Together with our customers, we create a community in which we
            strive for wellness, consolidate knowledge, and celebrate life
            through wholesome nutrition.
          </p>
        </div>
        <div className="col-sm-6"></div>
      </div>
    </div>
  );
};

export default AboutText;
