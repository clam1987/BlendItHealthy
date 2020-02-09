import React from "react";
import "../PageUtility/PageUtility.css";
import ReactToPrint from "react-to-print";



let PageUtility = () => {
  
  let grabHref = () => {
    let menuImgEl = document.getElementById("menuImg")
    let menuImg = menuImgEl.src
    let saveEl = document.getElementById("save-button");
    saveEl.href = menuImg;
  }
  return (
    <div className="row" id="pageUtility">
      <div className="col-sm-9"></div>
      <div className="col-sm-3">
        <ul className="list-unstyled list-inline text-center">
          <li className="list-inline-item">
            <a className="btn-floating btn-fb mx-1">
              <i className="fas fa-share-alt"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-gplus mx-1">
              <i className="fas fa-print"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a download="menu.jpg" className="btn-floating btn-tw mx-1" href="#" onClick={grabHref} title="Menu" id="save-button">
              <i className="fas fa-download"> </i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PageUtility;

let PrintButton = props => {
  return (
    <>
    <ReactToPrint trigger={() => {    <a className="btn-floating btn-gplus mx-1" href="#">
              <i className="fas fa-print"> </i>
            </a>}} content={() => {}} />
    </>
  )
}
