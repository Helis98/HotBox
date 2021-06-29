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
  return (
    <div className={classes.main}>
      <ul>
        <li key="tableheader">
          <StatusTableHeader />
        </li>
        {TEST_DATA.map((entry) => {
          return (
            <li key={entry.BoxID}>
              <StatusTableEntry
                BoxNumber={entry.BoxNumber}
                Empty={entry.Empty}
                info={'todo'}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default StatusTable;
