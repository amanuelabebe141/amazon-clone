import React from "react";
import classes from "./Category.module.css";
function CategoryCard({ id, title, image, footer, link }) {
  return (
    <a href={link}>
      <div className={classes.card}>
        <p>{title}</p>
        <img src={image} alt={`${title} image`} />
        <span>{footer}</span>
      </div>
    </a>
  );
}

export default CategoryCard;
