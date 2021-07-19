import { useState, useEffect } from "react";

import classes from "./StatusTable.module.css";
import StatusTableHeader from "./StatusTableHeader";
import StatusTableEntry from "./StatusTableEntry";

function StatusTable() {
  function fetchPath(command) {
    if (process.env.NODE_ENV === "production") {
      return "https://hotbox14.herokuapp.com/" + command;
    } else {
      return "http://localhost:5000/" + command;
    }
  }

  const [isLoading, setIsLoading] = useState(true);
  const [loadedData, setLoadedData] = useState([]);

  useEffect(() => {
    fetch(fetchPath("getorder"))
      .then((response) => response.json())
      .then((data) => {
        setLoadedData(data);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <div className={classes.main}>
      <ul>
        <li key="tableheader">
          <StatusTableHeader />
        </li>
        {loadedData.map((entry) => {
          return (
            <li key={entry.BoxID}>
              <StatusTableEntry
                BoxNumber={entry.BoxNumber}
                Empty={entry.Empty}
                info={"todo"}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default StatusTable;
