import React from "react";
import "../TestButton/TestButton.css";

let handleChange = () => {
  console.log("Go to Testimonial page");
};

let TestButton = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm">
          <button className="button badge-pill" id="testBtn" onClick={handleChange}>
            CLICK HERE TO SEE TESTIMONIALS FROM OUR HEALTH ENTHUSIAST GUESTS
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestButton;
