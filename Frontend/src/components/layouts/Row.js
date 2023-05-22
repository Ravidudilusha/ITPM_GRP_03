import React from "react";
import "./Row.css";

const Row = (props) => {
  return <div className="row">{props.children}</div>;
};

export default Row;
