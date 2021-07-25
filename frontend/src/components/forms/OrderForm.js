import { useRef, useState } from "react";

import classes from "./OrderForm.module.css";

function OrderForm() {
  function fetchPath(command) {
    if (process.env.NODE_ENV === "production") {
      return "https://hotbox14.herokuapp.com/" + command;
    } else {
      return "http://localhost:5000/" + command;
    }
  }

  const [orderCreated, setOrderCreated] = useState(false);

  const boxIDRef = useRef();
  const emailRef = useRef();
  const temperatureRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const boxID = boxIDRef.current.value;
    const email = emailRef.current.value;
    const temperature = temperatureRef.current.value;

    const orderData = {
      BoxNumber: boxID,
      email: email,
      temperature: temperature,
    };

    console.log(orderData);
    console.log(temperature);
    try {
      fetch(fetchPath("giveorder"), {
        method: "PATCH",
        body: JSON.stringify(orderData),
        headers: { "Content-Type": "application/json" },
      });
    } catch (err) {
      alert(err.toString());
      return;
    }
    setOrderCreated(true);
  }

  function closeConfirmation() {
    setOrderCreated(false);
  }

  return (
    <div className={classes.main}>
      <h1>Place an order!</h1>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.row}>
          <div className={classes.input}>
            <label htmlFor="firstName">First Name</label>
            <input type="text" required id="firstName" />
          </div>
          <div className={classes.input}>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" required id="lastName" />
          </div>
        </div>
        <div className={classes.input}>
          <label htmlFor="email">Email</label>
          <input type="email" required id="email" ref={emailRef} />
        </div>
        <div className={classes.input}>
          <label htmlFor="phoneNumber">Phone Number</label>
          <input type="text" required id="phoneNumber" />
        </div>
        <div className={classes.input}>
          <label htmlFor="boxid">Box Number</label>
          <input type="text" required id="boxid" ref={boxIDRef} />
        </div>
        <div className={classes.input}>
          <label htmlFor="temperature">Heat Level</label>
          <select required id="temperature" ref={temperatureRef}>
            <option value={110}>Warm</option>
            <option value={125}>Warmer</option>
            <option value={140}>Hot</option>
          </select>
        </div>
        <div className={classes.button}>
          <button className="btn btn--order">Submit Order</button>
        </div>
      </form>
      {orderCreated && (
        <div className={classes.confirmModal}>
          <p className={classes.bold}>Your order has been placed!</p>
          <button className="btn btn--alt btnSpace" onClick={closeConfirmation}>
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default OrderForm;
