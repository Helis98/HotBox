import { useRef } from "react";

import classes from "./AddBoxForm.module.css";

function OrderForm() {
  //const nameRef = useRef();
  //const foodRef = useRef();
  //const tempRef = useRef();
  const boxIDRef = useRef();
  const orderNumRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    //const name = nameRef.current.value;
    //const food = foodRef.current.value;
    //const temp = tempRef.current.value;
    const boxID = boxIDRef.current.value;
    const orderNum = orderNumRef.current.value;

    /*  const orderData = {
      name: name,
      food: food,
      temp: temp,
    };*/

    const orderData = {
      BoxID: boxID,
      orderNumber: orderNum,
    };

    console.log(orderData);
    try {
      fetch("http://localhost:5000/giveorder", {
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
    <div>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.input}>
          <label htmlFor="boxid">Box ID</label>
          <input type="text" required id="boxid" ref={boxIDRef} />
        </div>
        <div className={classes.input}>
          <label htmlFor="ordernum">Order Number</label>
          <input type="text" required id="ordernum" ref={orderNumRef} />
        </div>
        <div className={classes.button}>
          <button className="btn">Submit Order</button>
        </div>
      </form>
    </div>
  );
}

export default OrderForm;

/*

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
*/
