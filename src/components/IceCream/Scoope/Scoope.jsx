import React from "react";
import classes from "./Scoope.module.css";

const Scoope = ({ flavor }) => {
  return <div className={[classes.scoop, classes[flavor]].join(" ")}></div>;
};

export default Scoope;
