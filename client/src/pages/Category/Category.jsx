import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { useParams } from "react-router-dom";
import classes from "./Category.module.css";
import axios from "axios";
import ProductCard from "../../components/Body/Products/ProductCard";
import { SyncLoader } from "react-spinners";
function Category() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const { niche } = useParams();
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/category/${niche}`)
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
      <Header />
      <h1>Results</h1>
      <div className={classes.result_container}>
        {product?.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    </>
  );
}

export default Category;
