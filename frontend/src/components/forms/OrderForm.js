import { useRef } from "react";

import classes from "./AddBoxForm.module.css";

function OrderForm() {
  const nameRef = useRef();
  const foodRef = useRef();
  const tempRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const name = nameRef.current.value;
    const food = foodRef.current.value;
    const temp = tempRef.current.value;

    const orderData = {
      name: name,
      food: food,
      temp: temp,
    };

    console.log(orderData);
  }

  return (
    <div>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.input}>
          <label htmlFor="name">Enter Name</label>
          <input type="text" required id="name" ref={nameRef} />
        </div>
        <div className={classes.input}>
          <label htmlFor="food">Select Food</label>
          <input type="text" required id="food" ref={foodRef} />
        </div>
        <div className={classes.input}>
          <label htmlFor="temp">Select Temperature (optional add)</label>
          <input type="text" required id="temp" ref={tempRef} />
        </div>
        <div className={classes.button}>
          <button className="btn">Submit Order</button>
        </div>
      </form>
    </div>
  );
}

export default OrderForm;
