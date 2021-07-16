import { useState, useRef } from "react";

import classes from "./DeleteBoxModal.module.css";

function DeleteBoxModal(props) {
  function fetchPath(command) {
    if (process.env.NODE_ENV === "production") {
      return "https://hotbox14.herokuapp.com/" + command;
    } else {
      return "http://localhost:5000/" + command;
    }
  }
  const boxidRef = useRef();

  const [deletedBox, setDeletedBox] = useState(false);

  function deleteBox(event) {
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
      setDeletedBox(true);
    } catch (err) {
      alert(err.toString());
      return;
    }
  }
  return (
    <div className="confirmModal">
      {!deletedBox && (
        <form onSubmit={deleteBox}>
          <div className={classes.input}>
            <label htmlFor="boxid">Enter Box Number to Delete</label>
            <input type="text" required id="boxid" ref={boxidRef} />
          </div>
          <div className={classes.button}>
            <button className="btn btnSpace">Delete Box</button>
            <button className="btn btn--alt btnSpace" onClick={props.onCancel}>
              Cancel
            </button>
          </div>
        </form>
      )}
      {deletedBox && <p>Box was deleted</p>}
      {deletedBox && (
        <button className="btn btn--alt btnSpace" onClick={props.onCancel}>
          Close
        </button>
      )}
    </div>
  );
}

export default DeleteBoxModal;
