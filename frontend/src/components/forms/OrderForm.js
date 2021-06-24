import { useRef } from "react";

import classes from "./AddBoxForm.module.css";

function OrderForm() {
  const foodRef = useRef();
  const tempRef = useRef();
  const timeRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const food = foodRef.current.value;
    const temp = tempRef.current.value;
    const time = timeRef.current.value;

    const orderData = {
      food: food,
      temp: temp,
      time: time,
    };

    console.log(orderData);
  }

  return (
    <div>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.input}>
          <label htmlFor="food">Food Choice</label>
          <input type="text" required id="food" ref={foodRef} />
        </div>
        <div className={classes.input}>
          <label htmlFor="temp">Select Temperature</label>
          <input type="text" required id="temp" ref={tempRef} />
        </div>
        <div className={classes.input}>
          <label htmlFor="time">Time</label>
          <input type="text" required id="time" ref={timeRef} />
        </div>
        <div className={classes.button}>
          <button className="btn">Submit Order</button>
        </div>
      </form>
    </div>
  );
}

export default OrderForm;
