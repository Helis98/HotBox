import React from "react";

import classes from "./StatusTableEntry.module.css";

function StatusTableEntry(props) {
  return (
    <div className={classes.container}>
      <div className={classes.id}>
        <div>{props.id}</div>
      </div>
      <div className={classes.status}>
        <div>{props.status}</div>
      </div>
      <div className={classes.info}>
        <div>{props.info}</div>
      </div>
    </div>
  );
}

export default StatusTableEntry;
