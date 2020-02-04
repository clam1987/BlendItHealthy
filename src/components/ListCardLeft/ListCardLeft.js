import React from "react";
import "../ListCardLeft/ListCardLeft.css"

let ListCardLeft = props => {
    return (
      <li className="fruitList">
        <div className="row fruitRow" id={props.name}>
          <div className="col-sm-2 mx-0">
            <img src={props.img} alt={props.name} style={{border: props.color}} className="fruitsCollection"/>
          </div>
          <div className="col-sm-3 fruitsText align-self-center colBottom" id={props.id2} style={{color: props.textColor}}>{props.name}</div>
          <div className="col-sm-3 fruitsDescription text-left align-self-center colBottom2" id={props.desc} style={{color: props.descripColor}}>{props.description}</div>
          <div className="col-sm-4 px-0 align-self-end text-left colBottom3">
            <a className="colBottom4" href={props.link} id={props.uid}>Read More >></a>
          </div>
        </div>
      </li>
    );
  };

  export default ListCardLeft;