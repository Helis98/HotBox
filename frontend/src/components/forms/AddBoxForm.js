import { useRef } from "react";

import classes from "./AddBoxForm.module.css";

function AddBoxForm() {
  const boxidRef = useRef();
  const statusRef = useRef();
  const infoRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const boxid = boxidRef.current.value;
    const status = statusRef.current.value;
    const info = infoRef.current.value;

    const boxData = {
      id: boxid,
      status: status,
      info: info,
    };

    console.log(boxData);
  }

  return (
    <div>
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
    </div>
  );
}

export default AddBoxForm;
