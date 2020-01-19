import React from "react";
import "../ExtraImages/ExtraImages.css";

let ExtraImages = props => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm">
          <img
            src={props.banners}
            alt={props.name}
            className="img-fluid bimg"
          />
        </div>
      </div>
    </div>
  );
};

export default ExtraImages;
