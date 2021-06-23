import React from "react";

import classes from "./StatusDisplay.module.css";

function StatusDisplay(props) {
    let color = "none";
    if (props.status == "active") {
      color = "rgb(24, 151, 24)";
    }

  return (
    <div className={classes.container}>
      <div className={classes.inactive} style={{backgroundColor: color}}></div>
    </div>
  );
}

export default StatusDisplay;