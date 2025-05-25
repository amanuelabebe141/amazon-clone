import React from "react";
import classes from "./Category.module.css";
import { Link } from "react-router-dom";
function CategoryCard({ id, title, image, footer, link }) {
  return (
    <Link to={`/category/${link}`}>
      <div className={classes.card}>
        <p>{title}</p>
        <img src={image} alt={`${title} image`} />
        <span>Shop now!</span>
      </div>
    </Link>
  );
}

export default CategoryCard;
