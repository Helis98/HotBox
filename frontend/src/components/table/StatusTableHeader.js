import React from "react";

import classes from "./StatusTableHeader.module.css";
import StatusDisplay from "./StatusDisplay";

function StatusTableHeader() {
  return (
    <div>
      <div className={classes.colorContainer}>
        <div className={classes.header}>
          <div className={classes.element}>
            <div>
              <StatusDisplay status="active" />
            </div>
            <span>Active</span>
          </div>
          <div className={classes.element}>
            <div>
              <StatusDisplay status="inactive" />
            </div>
            <span>Inactive</span>
          </div>
        </div>
      </div>
      <div className={classes.entryContainer}>
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
    </div>
  );
}

export default StatusTableHeader;
