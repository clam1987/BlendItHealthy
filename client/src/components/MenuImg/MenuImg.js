import React from "react";
import "../MenuImg/MenuImg.css";

let MenuImg = () => {
  return (
    <div className="row" id="menuRowImg">
      <div className="col-sm-1"></div>
      <div className="col-sm-10">
        <img id="menuImg" src="placeholder" alt="placeholder" />
      </div>
      <div className="col-sm-1"></div>
    </div>
  );
};

export default MenuImg;
