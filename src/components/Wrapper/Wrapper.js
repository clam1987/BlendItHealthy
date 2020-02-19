import React from "react";
import "./Wrapper.css";

// Wrapper belongs to Home

function Wrapper(props) {
  return <div className="wrapper">{props.children}</div>;
}

export default Wrapper;
