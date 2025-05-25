import React, { useEffect, useState } from "react";
import classes from "./Product.module.css";
import axios from "axios";
import ProductCard from "./ProductCard";
import { SyncLoader } from "react-spinners";
function Products() {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <SyncLoader className={classes.loader} />;
  }
  return (
    <>
      <div className={classes.products}>
        <h2>Products</h2>
        <div className={classes.items}>
          {product?.map((item) => {
            return <ProductCard key={item.id} {...item} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Products;
