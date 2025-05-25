import React from "react";
import Caraousel from "../../components/Body/Carousel/Caraousel";
import Category from "../../components/Body/Category/Category";
import Products from "../../components/Body/Products/Products";
import Header from "../../components/Header/Header";

function Landing() {
  return (
    <>
      <Header />
      <Caraousel />
      <Category />
      <Products />
    </>
  );
}

export default Landing;
