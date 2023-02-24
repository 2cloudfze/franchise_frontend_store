import React, { useState } from "react";
import { sliderItems } from "@/db/offlineData/slider";
import { useEffect } from "react";
import DotTypography from "../Typography/DotTypography";
import MDBox from "../MDBox";

function Slider() {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (index) => {
    setSlideIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0);
    }, 5000);
    return () => clearInterval(interval);
  }, [slideIndex]);

  return (
    <MDBox>
      <MDBox
        style={{
          width: "100%",
          height: "35%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          backgroundColor: "white",
        }}
      >
        <MDBox
          style={{
            height: "100%",
            display: "flex",
            transition: "all 1.5s ease",
            transform: `translateX(${slideIndex * -100}vw)`,
          }}
        >
          {sliderItems.map((item) => (
            <MDBox
              key={item.id}
              style={{
                width: "100vw",
                height: "80vh",
                display: "flex",
                alignItems: "center",
                backgroundColor: `#${item.bg}`,
              }}
            >
              <MDBox style={{ height: "100%" }}>
                <img
                  src={item.img}
                  style={{ height: "100%", width: "130%" }}
                />
              </MDBox>
            </MDBox>
          ))}
        </MDBox>
      </MDBox>
      <MDBox style={{ textAlign: "center", marginTop: "20px" }}>
        {sliderItems.map((_, index) => (
          <DotTypography
            key={index}
            clickHandler={() => handleClick(index)}
            id={index}
            selectedIndex={slideIndex}
          />
        ))}
      </MDBox>
    </MDBox>
  );
}

export default Slider;
