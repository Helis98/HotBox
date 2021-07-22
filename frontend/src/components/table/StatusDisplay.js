import classes from "./StatusDisplay.module.css";

function StatusDisplay(props) {
  let color = "none";
  if (props.status === false) {
    color = "rgb(24, 151, 24)";
  }
  return (
    <div className={classes.container}>
      <div className={classes.status} style={{ backgroundColor: color }}></div>
    </div>
  );
}

export default StatusDisplay;
