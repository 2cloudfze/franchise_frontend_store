import { useState, useEffect, useRef } from "react";
import BodyDescTypography from "@/components/Typography/BodyDescTypography";
import MDBox from "@/components/MDBox";
import DealItem from "./DealItem";
import OrdersItems from "@/db/offlineData/ourDealsData";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const DealsComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
 

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) =>
        (prevSlide - 1 + Math.ceil(OrdersItems.length / 4)) %
        Math.ceil(OrdersItems.length / 4)
    );
  };

  const nextSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide + 1) % Math.ceil(OrdersItems.length / 4)
    );
  };

  return (
    <>
      <BodyDescTypography>OUR DEALS :</BodyDescTypography>
      <MDBox
        style={{
          position: "relative",
          overflowX: "scroll",
          WebkitOverflowScrolling: "touch", scrollbarWidth: "none", msOverflowStyle: "none",
          width: "100%",
          height: "400px",
          scrollBehavior: "smooth",
          scrollbarWidth: "none", 
          '-ms-overflow-style': 'none' ,
          '::WebkitScrollbar': { display: 'none' },
        }}
       
      >
        <MDBox
          style={{
            display: "flex",
            width: `${OrdersItems.length * 20}%`,
            transition: "transform 0.5s ease",
            transform: `translateX(-${currentSlide * 25}%)`,
          }}
        >
          {OrdersItems.map((product) => (
            <DealItem
              key={product.id}
              id={product.id}
              img_url={product.img_url}
              name={product.name}
              price={product.price}
            />
          ))}
        </MDBox>
      </MDBox>
      <ArrowBackIosNewIcon
        style={{
          position: "absolute",
          top: "50%",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          left: "10px",
          opacity: "0.5",
        }}
        onClick={prevSlide}
        fontSize="medium"
      />

      <ArrowForwardIosIcon
        style={{
          position: "absolute",
          top: "50%",

          background: "transparent",
          border: "none",
          fontSize: "24px",
          cursor: "pointer",
          right: "10px",
          opacity: "0.5",
        }}
        onClick={nextSlide}
        fontSize="medium"
      />
    </>
  );
};

export default DealsComponent;
