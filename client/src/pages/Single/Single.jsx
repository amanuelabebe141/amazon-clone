import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { useParams } from "react-router-dom";
import classes from "./Single.module.css";
import axios from "axios";
import ProductCard from "../../components/Body/Products/ProductCard";

function Single() {
  const [product, setProduct] = useState([]);
  const { singleNiche } = useParams();
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${singleNiche}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, []);
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
