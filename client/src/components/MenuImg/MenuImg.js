import React from "react";
import "../MenuImg/MenuImg.css";
import redMenu from "../../assets/images/red_menu.png"

let MenuImg = () => {
  return (
    <div className="row" id="menuRowImg">
      <div className="col-sm-1"></div>
      <div className="col-sm-10">
        <img id="menuImg" src={redMenu} alt="placeholder" />
      </div>
      <div className="col-sm-1"></div>
    </div>
  );
};

export default MenuImg;
