import { useRef, useState } from "react";

import classes from "./AdminModal.module.css";
import AddBoxModal from "./AddBoxModal";
import BackdropModal from "./BackdropModal";

function AddBoxForm() {
  function fetchPath(command) {
    if (process.env.NODE_ENV === "production") {
      return "https://hotbox14.herokuapp.com/" + command;
    } else {
      return "http://localhost:5000/" + command;
    }
  }

  const boxidRef = useRef();

  const [displayAddModal, setDisplayAddModal] = useState(false);

  function deleteBoxHandler(event) {
    event.preventDefault();

    const boxid = boxidRef.current.value;

    const data = {
      BoxID: boxid,
    };

    console.log(data);

    try {
      fetch(fetchPath("deletebox/") + boxid, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
    } catch (err) {
      alert(err.toString());
      return;
    }
  }
  function addBox() {
    setDisplayAddModal(true);
  }

  function closeAddModal() {
    setDisplayAddModal(false);
  }

  return (
    <div>
      <div className={classes.button}>
        <button className="btn" onClick={addBox}>
          Add Box
        </button>
      </div>
      <form onSubmit={deleteBoxHandler}>
        <div className={classes.input}>
          <label htmlFor="boxid">Box ID</label>
          <input type="text" required id="boxid" ref={boxidRef} />
        </div>
        <div className={classes.button}>
          <button className="btn">Delete Box</button>
        </div>
      </form>
      {displayAddModal && <AddBoxModal onCancel={closeAddModal} />}
      {displayAddModal && <BackdropModal onClick={closeAddModal} />}
    </div>
  );
}

export default AddBoxForm;
