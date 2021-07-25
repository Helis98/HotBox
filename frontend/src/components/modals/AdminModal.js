import { useState } from "react";

import classes from "./AdminModal.module.css";
import AddBoxModal from "./AddBoxModal";
import BackdropModal from "./BackdropModal";
import DeleteBoxModal from "./DeleteBoxModal";
import LockBoxModal from "./LockBoxModal";

function AddBoxForm() {
  const [displayAddModal, setDisplayAddModal] = useState(false);
  const [displayDeleteModal, setDisplayDeleteModal] = useState(false);
  const [displayLockModal, setDisplayLockModal] = useState(false);

  function addBox() {
    setDisplayAddModal(true);
  }

  function closeAddModal() {
    setDisplayAddModal(false);
  }

  function deleteBox() {
    setDisplayDeleteModal(true);
  }

  function closeDeleteModal() {
    setDisplayDeleteModal(false);
  }

  function lockBox() {
    setDisplayLockModal(true);
  }

  function closeLockModal() {
    setDisplayLockModal(false);
  }

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div>
      <div className={classes.button}>
        <button className="btn btnSpace" onClick={addBox}>
          Add Box
        </button>
        <button className="btn btnSpace" onClick={deleteBox}>
          Delete Box
        </button>
        <button className="btn btn--alt btnSpace" onClick={lockBox}>
          Lock Box
        </button>
        <button className="btn btn--alt btnSpace" onClick={refreshPage}>
          Close Admin
        </button>
      </div>
      {displayAddModal && <AddBoxModal onCancel={closeAddModal} />}
      {displayDeleteModal && <DeleteBoxModal onCancel={closeDeleteModal} />}
      {displayLockModal && <LockBoxModal onCancel={closeLockModal} />}
      {displayAddModal && <BackdropModal onClick={closeAddModal} />}
      {displayDeleteModal && <BackdropModal onClick={closeDeleteModal} />}
      {displayLockModal && <BackdropModal onClick={closeLockModal} />}
    </div>
  );
}

export default AddBoxForm;
