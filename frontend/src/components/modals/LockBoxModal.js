import { useState, useRef } from "react";

import classes from "./DeleteBoxModal.module.css";

function LockBoxModal(props) {
  function fetchPath(command) {
    if (process.env.NODE_ENV === "production") {
      return "https://hotbox14.herokuapp.com/" + command;
    } else {
      return "http://localhost:5000/" + command;
    }
  }
  const boxidRef = useRef();

  const [lockedBox, setLockedBox] = useState(false);

  function lockBox(event) {
    event.preventDefault();

    const boxid = boxidRef.current.value;

    const data = {
      BoxID: boxid,
    };

    console.log(data);

    try {
      fetch(fetchPath("lockbox"), {
        method: "PATCH",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });
      setLockedBox(true);
    } catch (err) {
      alert(err.toString());
      return;
    }
  }
  return (
    <div className="confirmModal">
      {!lockedBox && (
        <form onSubmit={lockBox}>
          <div className={classes.input}>
            <label htmlFor="boxid">Enter Box Number to Lock</label>
            <input type="text" required id="boxid" ref={boxidRef} />
          </div>
          <div className={classes.button}>
            <button className="btn btnSpace">Lock Box</button>
            <button className="btn btn--alt btnSpace" onClick={props.onCancel}>
              Cancel
            </button>
          </div>
        </form>
      )}
      {lockedBox && <p>Box is now locked</p>}
      {lockedBox && (
        <button className="btn btn--alt btnSpace" onClick={props.onCancel}>
          Close
        </button>
      )}
    </div>
  );
}

export default LockBoxModal;
