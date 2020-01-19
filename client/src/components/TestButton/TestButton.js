import React from "react";
import "../TestButton/TestButton.css";

let TestButton = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm">
          <a href="/testimonials">
            <button className="button badge-pill" id="testBtn">
              CLICK HERE TO SEE TESTIMONIALS FROM OUR HEALTH ENTHUSIAST GUESTS
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TestButton;
