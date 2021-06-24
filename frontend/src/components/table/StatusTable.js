import React from "react";

import classes from "./StatusTable.module.css";
import StatusTableHeader from "./StatusTableHeader";
import StatusTableEntry from "./StatusTableEntry";

const TEST_DATA = [
  {
    id: "box1",
    status: "statusActive",
    info: "todo",
  },
  {
    id: "box2",
    status: "statusUnavailable",
    info: "todo",
  },
  {
    id: "box3",
    status: "statusInactive",
    info: "todo",
  },
  {
    id: "box4",
    status: "statusInactive",
    info: "todo",
  },
];

function StatusTable(props) {
  return (
    <div className={classes.main}>
      <ul>
        <li key='tableheader'>
          <StatusTableHeader />
        </li>
        {TEST_DATA.map((entry) => {
          return (
            <li key={entry.id}>
              <StatusTableEntry
                id={entry.id}
                status={entry.status}
                info={entry.info}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default StatusTable;
