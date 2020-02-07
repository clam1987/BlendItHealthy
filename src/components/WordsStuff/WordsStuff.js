import React from "react";
import "../WordsStuff/WordsStuff.css";

let WordsStuff = props => {
  return (
    <div id="comments">
      <p id="pComments" style={{ width: "100%", height: "230px" }}>
        {props.each}
      </p>
    </div>
  );
};

export default WordsStuff;
