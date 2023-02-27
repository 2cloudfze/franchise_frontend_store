import { useState, useEffect, useRef } from "react";
import BodyDescTypography from "@/components/Typography/BodyDescTypography";
import MDBox from "@/components/MDBox";
import DealItem from "./DealItem";
import OrdersItems from "@/db/offlineData/ourDealsData";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const DealsComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showArrows, setShowArrows] = useState(true);

  
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
     
      
      <div className="scroll-bar">
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
        </MDBox >
      </div>
      <MDBox style={{ display: "flex", justifyContent: "space-between" }}>
        <ArrowBackIosNewIcon
          style={{
            position: "absolute",
            top: "50%",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            left: "10px",
            opacity: "0.8",
          }}
          onClick={prevSlide}
          fontSize="large"
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
            opacity: "0.8",
          }}
          onClick={nextSlide}
          fontSize="large"
        />
        </MDBox>
      <style jsx>{`
        .scroll-bar {
          position: relative;
          overflow-x: scroll;
          -webkit-overflow-scrolling: touch;
          width: 100%;
          height: 400px;
          scroll-behavior: smooth;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .scroll-bar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
     
    </>
  );
};

export default DealsComponent;
