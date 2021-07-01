import { useState } from "react";

import classes from "./SystemPage.module.css";
import AdminModal from "../components/modals/AdminModal";

function ServerPage() {
  const [addModalOpen, setAddModalOpen] = useState(false);

  function addButtonHandler() {
    setAddModalOpen(true);
  }

  function cancelButtonHandler() {
    setAddModalOpen(false);
  }
  return (
    <div className={classes.main}>
      {!addModalOpen ? (
        <div>
          <button className="btn" onClick={addButtonHandler}>
            Add Box
          </button>
        </div>
      ) : null}
      {addModalOpen ? (
        <div className={classes.container}>
          <AdminModal />
          <button className="btn" onClick={cancelButtonHandler}>
            Cancel
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default ServerPage;
