import React from "react";

import classes from "./StatusTableEntry.module.css";

function StatusTableEntry(props) {
  return (
    <div className={classes.container}>
      <div className={classes.id}>
        <div>Box</div>
      </div>
      <div className={classes.status}>
        <div>Status</div>
      </div>
      <div className={classes.info}>
        <div>Info</div>
      </div>
    </div>
  );
}

export default StatusTableEntry;
