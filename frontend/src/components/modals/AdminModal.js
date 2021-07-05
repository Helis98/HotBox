import { useRef } from "react";

import classes from "./AdminModal.module.css";

function AddBoxForm() {
  const boxidRef = useRef();

  function deleteBoxHandler(event) {
    event.preventDefault();

    const boxid = boxidRef.current.value;

    const data = {
      BoxID: boxid,
    };

    console.log(data);

    try {
      fetch("http://localhost:5000/deletebox/" + boxid, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
    } catch (err) {
      alert(err.toString());
      return;
    }
  }
  function addBox(event) {
    event.preventDefault();

    try {
      fetch("http://localhost:5000/addbox", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
    } catch (err) {
      alert(err.toString());
      return;
    }
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
    </div>
  );
}

export default AddBoxForm;
