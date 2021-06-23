import React from "react";

import classes from "./StatusTable.module.css";
import StatusTableHeader from "./StatusTableHeader";
import StatusTableEntry from "./StatusTableEntry";

function StatusTable(props) {
  return (
    <div className={classes.main}>
      <ul>
        <li>
          <StatusTableHeader />
        </li>
        <li>
          <StatusTableEntry id="Box" status="Status" info="Info"/>
        </li>
      </ul>
    </div>
  );
}

export default StatusTable;
