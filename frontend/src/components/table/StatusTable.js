import { useState, useEffect } from "react";

import classes from "./StatusTable.module.css";
import StatusTableHeader from "./StatusTableHeader";
import StatusTableEntry from "./StatusTableEntry";

const TEST_DATA = [
  {
    BoxID: "654655654",
    BoxNumber: 10,
    Empty: true,
  },
];

function StatusTable(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedData, setLoadedData] = useState([]);

  /*useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:5000/getorder")
      .then((response) => {
        return response.json();
      })
      .then((data) => {/*
        const boxes = [];

        for (const key in data) {
          const box = {
            id: key,
            ...data[key]
          };

          boxes.push(box);
        }//
        setIsLoading(false);
        setLoadedData(data);
      });
  }, []);*/

  /* if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }*/

  useEffect(() => {
    fetch("http://localhost:5000/getorder")
      .then((response) => response.json())
      .then((data) => {
        setLoadedData(data);
        console.log(loadedData);
      });
  }, []);

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
