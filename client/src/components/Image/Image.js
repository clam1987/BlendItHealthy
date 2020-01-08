import React from "react";
import "../Image/Image.css";

let Image = (props) => {
    // console.log(props)
    return (
        <div className="row row-cols-1 row-cols-md-3">
      <div className="card-deck">
        <div className="card">
          <img src={props.gallery} className="card-img-top" alt={props.name}/>
        </div>
      </div>
      </div>
    )
  }

export default Image;