import React from "react";
import classes from "./Product.module.css";
import Rating from "react-rating";
import { FaStar, FaRegStar } from "react-icons/fa";
function ProductCard({ id, title, image, description, rating, price }) {
  function truncate(text, maxLength) {
    const string = new String(text);
    if (string.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  }

  function currency(price) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  }
  return (
    <div className={classes.card}>
      <img src={image} alt="" />
      <div className={classes.info}>
        <p>{truncate(title, 40)}</p>
        <span className={classes.price}>{currency(price)}</span>
        <Rating
          emptySymbol={<FaRegStar size={13} color="#ccc" />}
          fullSymbol={<FaStar size={13} color="#ffd700" />}
          initialRating={rating?.rate}
          fractions={2}
        />
        <button>Add to cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
