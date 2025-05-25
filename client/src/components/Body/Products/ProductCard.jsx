import React, { useContext } from "react";
import classes from "./Product.module.css";
import Rating from "react-rating";
import { FaStar, FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Data } from "../../../DataProvider";
import { Type } from "../../../../utils/action.type";
function ProductCard({
  id,
  title,
  image,
  description,
  rating,
  price,
  extra,
  cart,
}) {
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
  const [state, dispatch] = useContext(Data);
  function addtocart() {
    dispatch({
      type: Type.ADD_TO_CART,
      item: { id, title, image, description, rating, price },
    });
  }
  function remove() {
    dispatch({
      type: Type.REMOVE_FROM_CART,
      item: {
        id,
        title,
        price,
        description,
        image,
        rating,
      },
    });
  }
  return (
    <div
      className={`${classes.card} ${extra && classes.extra} ${
        cart && classes.cart
      }`}
    >
      <Link to={`/products/${id}`}>
        <img src={image} alt="" />
      </Link>
      {extra && (
        <div className={classes.description}>
          <p>{description}</p>
        </div>
      )}
      <div className={classes.info}>
        <p>{truncate(title, 40)}</p>
        <span className={classes.price}>{currency(price)}</span>
        <Rating
          emptySymbol={<FaRegStar size={13} color="#ccc" />}
          fullSymbol={<FaStar size={13} color="#ffd700" />}
          initialRating={rating?.rate}
          fractions={2}
        />
        <button className={classes.none} onClick={addtocart}>
          Add to cart
        </button>
        {cart && (
          <button className={classes.remove} onClick={remove}>
            Remove from cart
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
