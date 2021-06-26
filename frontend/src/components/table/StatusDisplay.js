import classes from "./StatusDisplay.module.css";

function StatusDisplay(props) {
  return (
    <div className={classes.container}>
      <div className={props.status}></div>
    </div>
  );
}

export default StatusDisplay;
