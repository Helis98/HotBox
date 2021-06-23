import React from "react";

import classes from "./StatusTable.module.css";
import StatusTableHeader from "./StatusTableHeader";
import StatusTableEntry from "./StatusTableEntry";

const TEST_DATA = [
  {
    id: "box1",
    status: "active",
    info: "todo",
  },
  {
    id: "box2",
    status: "active",
    info: "todo",
  },
  {
    id: "box3",
    status: "inactive",
    info: "todo",
  },
  {
    id: "box4",
    status: "inactive",
    info: "todo",
  },
];

function StatusTable(props) {
  return (
    <div className={classes.main}>
      <ul>
        <li>
          <StatusTableHeader />
        </li>
        {TEST_DATA.map((entry) => {
          return (
            <li>
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
