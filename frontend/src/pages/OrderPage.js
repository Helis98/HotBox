import classes from "./OrderPage.module.css";
import OrderForm from "../components/forms/OrderForm";

function OrderPage() {
  return (
    <div className={classes.main}>
      <div className={classes.container}>
        <OrderForm />
      </div>
    </div>
  );
}

export default OrderPage;
