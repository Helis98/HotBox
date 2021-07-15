import StatusTable from "../components/table/StatusTable";
import AdminLock from "./AdminLock";

function StatusPage() {
  return (
    <div>
      <StatusTable />
      <AdminLock />
    </div>
  );
}

export default StatusPage;
