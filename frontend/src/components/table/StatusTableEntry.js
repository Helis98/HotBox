import classes from "./StatusTableEntry.module.css";
import StatusDisplay from "./StatusDisplay";

function StatusTableEntry(props) {
  return (
    <div className={classes.container}>
      <div className={classes.id}>
        <div>{props.BoxNumber}</div>
      </div>
      <div className={classes.status}>
        <div>
          <StatusDisplay status={props.Empty} />
        </div>
      </div>
      <div className={classes.info}>
        <div>{props.info}</div>
      </div>
    </div>
  );
}

export default StatusTableEntry;
