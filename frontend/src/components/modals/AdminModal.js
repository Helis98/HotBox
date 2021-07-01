import { useRef } from "react";

import classes from "./AdminModal.module.css";

function AddBoxForm() {
  //const boxidRef = useRef();
  //const statusRef = useRef();
  //const infoRef = useRef();

  const boxidRef = useRef();

  function deleteBoxHandler(event) {
    event.preventDefault();

    const boxid = boxidRef.current.value;

    console.log("Delete" + boxid);

    try {
      //console.log(boxData);

      fetch("http://localhost:5000/deletebox", {
        method: "DELETE",
        body: boxid,
        headers: { "Content-Type": "application/json" },
      });
    } catch (err) {
      alert(err.toString());
      return;
    }
  }
  function addBox(event) {
    event.preventDefault();

    /*  const boxid = boxidRef.current.value;
    const status = statusRef.current.value;
    const info = infoRef.current.value;

    const boxData = {
      BoxNumber: boxid,
      Empty: status,
    };*/

    try {
      //console.log(boxData);

      fetch("http://localhost:5000/addbox", {
        method: "POST",
        body: JSON.stringify(/*boxData*/),
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

/*
<form className={classes.form} onSubmit={submitHandler}>
<div className={classes.input}>
  <label htmlFor="boxid">Box ID</label>
  <input type="text" required id="boxid" ref={boxidRef} />
</div>
<div className={classes.input}>
  <label htmlFor="status">Status</label>
  <input type="text" required id="status" ref={statusRef} />
</div>
<div className={classes.input}>
  <label htmlFor="info">Info</label>
  <input type="text" required id="info" ref={infoRef} />
</div>
<div className={classes.button}>
  <button className="btn">Add Box</button>
</div>
</form>
*/
