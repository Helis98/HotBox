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
              <StatusDisplay status="statusActive" />
            </div>
            <span>Active</span>
          </div>
          <div className={classes.element}>
            <div>
              <StatusDisplay status="statusInactive" />
            </div>
            <span>Inactive</span>
          </div>
          <div className={classes.element}>
            <div>
              <StatusDisplay status="statusUnavailable" />
            </div>
            <span>Unavailable</span>
          </div>
        </div>
      </div>
      <div className={classes.entryContainer}>
        <div className={classes.id}>
          <div>
            <text className={classes.text}>Box</text>
          </div>
        </div>
        <div className={classes.status}>
          <div>
            <text className={classes.text}>Status</text>
          </div>
        </div>
        <div className={classes.info}>
          <div>
            <text className={classes.text}>Info</text>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatusTableHeader;
