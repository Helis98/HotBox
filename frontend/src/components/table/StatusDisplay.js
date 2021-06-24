import React from "react";

import classes from "./StatusDisplay.module.css";

function StatusDisplay(props) {
  let color = "none";
  if (props.status == "active") {
    color = "rgb(24, 151, 24)";
  }
  if (props.status == "inactive") {
    color = "none";
  }
  if (props.status == "unavailable") {
    color = "rgb(230, 0, 0)";
  }

  return (
    <div className={classes.container}>
      <div
        className={classes.inactive}
        style={{ backgroundColor: color }}
      ></div>
    </div>
  );
}

export default StatusDisplay;
