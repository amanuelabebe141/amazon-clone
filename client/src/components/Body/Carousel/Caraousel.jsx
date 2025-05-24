import React from "react";
import classes from "./Caraousel.module.css";
import { Carousel } from "react-responsive-carousel";
import { images } from "../../../assets/Courasel/data";
import "react-responsive-carousel/lib/styles/carousel.min.css";
function Caraousel() {
  return (
    <>
      <Carousel
        className={classes.carousel}
        showArrows={false}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        swipeable={true}
      >
        {images.map((img, i) => (
          <img key={i} src={img} />
        ))}
      </Carousel>
    </>
  );
}

export default Caraousel;
