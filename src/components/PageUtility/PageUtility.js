import React from "react";
import "../PageUtility/PageUtility.css";

let PageUtility = () => {
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
            <a className="btn-floating btn-tw mx-1">
              <i className="fas fa-download"> </i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PageUtility;
