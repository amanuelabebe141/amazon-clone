import React from "react";
import classes from "./Category.module.css";
import { data } from "./data";
import CategoryCard from "./CategoryCard";
function Category() {
  return (
    <>
      <div className={classes.category}>
        {data.map((item) => (
          <CategoryCard key={item.id} {...item} />
        ))}
      </div>
    </>
  );
}

export default Category;
