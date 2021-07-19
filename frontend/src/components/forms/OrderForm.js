import { useRef } from "react";

import classes from "./OrderForm.module.css";

function OrderForm() {
  function fetchPath(command) {
    if (process.env.NODE_ENV === "production") {
      return "https://hotbox14.herokuapp.com/" + command;
    } else {
      return "http://localhost:5000/" + command;
    }
  }

  const boxIDRef = useRef();
  const emailRef = useRef();
  const foodRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const boxID = boxIDRef.current.value;
    const email = emailRef.current.value;
    const food = foodRef.current.value;

    const orderData = {
      BoxNumber: boxID,
      email: email,
    };

    console.log(orderData);
    console.log(food);
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
          <input type="text" required id="email" ref={emailRef}/>
        </div>
        <div className={classes.input}>
          <label htmlFor="phoneNumber">Phone Number</label>
          <input type="text" required id="phoneNumber" />
        </div>
        <div className={classes.input}>
          <label htmlFor="boxid">Box ID</label>
          <input type="text" required id="boxid" ref={boxIDRef} />
        </div>
        <div className={classes.input}>
          <label htmlFor="food">Select Your Food</label>
          <select required id="food" ref={foodRef}>
            <option value="bacon">Bacon</option>
            <option value="burger">Burger</option>
            <option value="wrap">Wrap</option>
          </select>
        </div>
        <div className={classes.button}>
          <button className="btn btn--order">Submit Order</button>
        </div>
      </form>
    </div>
  );
}

export default OrderForm;
