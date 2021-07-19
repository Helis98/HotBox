import classes from "./StatusPage.module.css";

import StatusTable from "../components/table/StatusTable";
import AdminLock from "../components/modals/AdminLock";

function StatusPage() {
  return (
    <div className={classes.main}>
      <div className={classes.border}>
        <StatusTable />
        <AdminLock />
      </div>
    </div>
  );
}

export default StatusPage;
