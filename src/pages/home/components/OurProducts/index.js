import MDBox from "@/components/MDBox";
import { useState, useEffect } from "react";
import BodyDescTypography from "@/components/Typography/BodyDescTypography";
import ButtonTypography from "@/components/Typography/ButtonTYpography";
import ProductData from "@/db/offlineData/ourProductsData";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const OurProducts = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide(
        (prevSlide) => (prevSlide + 1) % Math.ceil(ProductData.length / 4)
      );
    }, 2000);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) =>
        (prevSlide - 1 + Math.ceil(ProductData.length / 4)) %
        Math.ceil(ProductData.length / 4)
    );
  };

  const nextSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide + 1) % Math.ceil(ProductData.length / 4)
    );
  };

  return (
    <MDBox>
      <BodyDescTypography>OUR PRODUCTS :</BodyDescTypography>
      <MDBox style={{ width: "100%", overflow: "hidden",position: "relative",}}>
        <MDBox
          style={{
            display: "flex",
            transition: "transform 0.5s",
            transform: `translateX(-${currentSlide * 25}%)`,
          }}
        >
          {ProductData.map((slide, index) => (
            <MDBox key={index} style={{ flexShrink: 0, width: "25%" }}>
              <img
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                src={slide}
                alt={`Slide ${index}`}
              />
            </MDBox>
          ))}
        </MDBox>
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
      </MDBox>
    </MDBox>
  );
};

export default OurProducts;
