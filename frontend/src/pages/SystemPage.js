import { useState, useRef } from "react";

import classes from "./SystemPage.module.css";
import AdminModal from "../components/modals/AdminModal";

function ServerPage() {
  function fetchPath(command) {
    if (process.env.NODE_ENV === "production") {
      return "https://hotbox14.herokuapp.com/" + command;
    } else {
      return "http://localhost:5000/" + command;
    }
  }

  const [addModalOpen, setAddModalOpen] = useState(false);
  const pinRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const pin = pinRef.current.value;
    const data = {
      code: pin,
    };

    try {
      fetch(fetchPath("getcode"), {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      }).then((response) => {
        if (response.status === 200) {
          setAddModalOpen(true);
        } else if (response.status === 406) {
          console.log("Invalid code");
        } else {
          console.log("Error");
        }
      });
    } catch (err) {
      alert(err.toString());
      return;
    }
  }
  return (
    <div className={classes.main}>
      {!addModalOpen ? (
        <form className={classes.form} onSubmit={submitHandler}>
          <div className={classes.input}>
            <label htmlFor="pin">Admin PIN</label>
            <input type="password" required id="pin" ref={pinRef} />
          </div>
          <div className={classes.button}>
            <button className="btn">Submit Pin</button>
          </div>
        </form>
      ) : null}
      {addModalOpen ? (
        <div className={classes.container}>
          <AdminModal />
        </div>
      ) : null}
    </div>
  );
}

export default ServerPage;
