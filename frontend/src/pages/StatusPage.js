import StatusTable from "../components/table/StatusTable";
import AdminLock from "../components/modals/AdminLock";

function StatusPage() {
  return (
    <div>
      <StatusTable />
      <AdminLock />
    </div>
  );
}

export default StatusPage;
