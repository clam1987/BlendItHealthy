import React from "react";
import "../ProgramsImage/ProgramsImage.css";

let ProgramsImage = props => {
    return(
        <>
        <div className="row" id="progsRow" style={props.style}>
            <div className="col-sm">
                <img src={props.progImg} alt={props.text} id="progsImg"/>
            </div>
        </div>
        </>
    )
}

export default ProgramsImage