import { useState } from "react";

import classes from "./AdminModal.module.css";
import AddBoxModal from "./AddBoxModal";
import BackdropModal from "./BackdropModal";
import DeleteBoxModal from "./DeleteBoxModal";

function AddBoxForm() {
  const [displayAddModal, setDisplayAddModal] = useState(false);
  const [displayDeleteModal, setDisplayDeleteModal] = useState(false);

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

  return (
    <div>
      <div className={classes.button}>
        <button className="btn btnSpace" onClick={addBox}>
          Add Box
        </button>
        <button className="btn btnSpace" onClick={deleteBox}>
          Delete Box
        </button>
      </div>
      {displayAddModal && <AddBoxModal onCancel={closeAddModal} />}
      {displayDeleteModal && <DeleteBoxModal onCancel={closeDeleteModal} />}
      {displayAddModal && <BackdropModal onClick={closeAddModal} />}
      {displayDeleteModal && <BackdropModal onClick={closeDeleteModal} />}
    </div>
  );
}

export default AddBoxForm;
