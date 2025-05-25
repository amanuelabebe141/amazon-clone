import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { useParams } from "react-router-dom";
import classes from "./Single.module.css";
import axios from "axios";
import ProductCard from "../../components/Body/Products/ProductCard";
import { SyncLoader } from "react-spinners";
function Single() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const { singleNiche } = useParams();
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${singleNiche}`)
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
      <div className={classes.single_container}>
        <ProductCard {...product} extra={true} />
      </div>
    </>
  );
}

export default Single;
