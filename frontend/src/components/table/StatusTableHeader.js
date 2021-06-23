import React from "react";

import classes from "./StatusTableHeader.module.css";
import StatusDisplay from "./StatusDisplay";

function StatusTableHeader() {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <div className={classes.element}>
          <div>
            <StatusDisplay status="active"/>
          </div>
          <span>Active</span>
        </div>
        <div className={classes.element}>
          <div>
            <StatusDisplay status="inactive"/>
          </div>
          <span>Inactive</span>
        </div>
      </div>
    </div>
  );
}

export default StatusTableHeader;
