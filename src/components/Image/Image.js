import React from "react";
import "../Image/Image.css";

// Image belongs to home Page

let Image = props => {
  return (
    <div className="row row-cols-1" id="homeImgRow">
      <div className="card-deck">
        <div className="card">
          <img src={props.gallery} className="card-img-top" alt={props.name} />
        </div>
      </div>
    </div>
  );
};

export default Image;
