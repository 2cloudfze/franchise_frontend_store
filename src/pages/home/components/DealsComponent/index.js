import React, { useState } from "react";
import styled from "@emotion/styled";
import OrdersItems from "@/db/offlineData/myOrdersData";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { useEffect } from "react";
import DealItem from "./DealItem";
import BodyDescTypography from "@/components/Typography/BodyDescTypography";
import FlexBox from "@/components/MDSpacer/MDSpacer";
import MDBox from "@/components/MDBox";

function DealsComponent() {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      console.log(direction);
      setSlideIndex(slideIndex < OrdersItems.length - 3 ? slideIndex + 1 : 0);
    } else {
      console.log(direction);
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : OrdersItems.length - 3);
    }
    console.log(slideIndex);
  };
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0);
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, [slideIndex]);

  return (
    <MDBox p={1}>
      <BodyDescTypography>OUR DEALS :</BodyDescTypography>

      {/* <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined sx={{ fontSize: 60 }} />
      </Arrow> */}

      <MDBox slideIndex={slideIndex} display="flex" flexDirection="row" p={2}>
        {OrdersItems.slice(slideIndex, slideIndex + 6).map((product) => (
          <DealItem
            key={product.id}
            id={product.id}
            img_url={product.img_url}
            name={product.name}
            price={product.price}
          />
        ))}
      </MDBox>

      {/* <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined sx={{ fontSize: 60 }} />
      </Arrow> */}
    </MDBox>
  );
}

export default DealsComponent;
