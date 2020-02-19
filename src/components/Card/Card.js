import React from "react";
import "../Card/Card.css";

let Card = props => {
  return (
    <li>
      <div className="card mb-3" style={{ maxWidth: 720 }}>
        <div className="row no-gutters">
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">{props.p1}</p>
              <a href={props.links}>
                <p className="card-text text-right">
                  <strong>
                    <u>Read Article >>></u>
                  </strong>
                </p>
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <img
              src={require("../../assets/images/" + props.cardImg)}
              className="card-img"
              alt="..."
            />
          </div>
        </div>
      </div>
    </li>
  );
};

export default Card;
