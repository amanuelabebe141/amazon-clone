import React from "react";
import Header from "../../components/Header/Header";
import { useContext } from "react";
import { Data } from "../../DataProvider";
import ProductCard from "../../components/Body/Products/ProductCard";
import classes from "./Cart.module.css";
function Cart() {
  const [{ basket }, dispatch] = useContext(Data);
  const subtotal = basket?.reduce((acc, item) => acc + item.price, 0);
  function currency(price) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  }
  return (
    <>
      <Header />
      <div className={classes.cart}>
        <div className={classes.items}>
          {basket?.map((item) => (
            <ProductCard key={item.id} extra={true} {...item} cart={true} />
          ))}
        </div>
        <div className={classes.checkout}>
          <p>Subtotal ({basket?.length || 0} items)</p>
          <p>Price: {currency(subtotal)}</p>
          <button>Continue to checkout</button>
        </div>
      </div>
    </>
  );
}

export default Cart;
