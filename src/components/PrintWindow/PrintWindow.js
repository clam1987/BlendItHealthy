import React from "react";
import "../PrintWindow/PrintWindow.css";

const PrintWindow = props => {
    return (
        <div id={props.namesId}>
            <h1>This will print!</h1>
        </div>
    )
}

export default PrintWindow;