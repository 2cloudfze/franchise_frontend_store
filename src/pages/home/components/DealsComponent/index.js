import React, { useState } from "react";
import styled from "@emotion/styled";
import OrdersItems from "@/db/offlineData/myOrdersData";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { useEffect } from "react";
import GridComponent from "@/components/GridComponent";
import DealItem from "./DealItem";

const Container = styled.div`
  width: 50%;
  height: 400px;
  display: flex;
  align-items: center;
  margin-top: 100px;
  margin-left: 400px;
  margin-right: 400px;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 80px;
  height: 400px;
  // background-color: #057c99;
  // border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "-11px"};
  right: ${(props) => props.direction === "right" && "-11px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 33.33%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImgContainer = styled.div`
  height: 40%;
  margin-left: 100px;
  flex: 1;
`;

const Image = styled.img`
  height: 80%;
  margin-bottom: 30px;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 70px;
`;

const Title = styled.h1`
  font-size: 30px;
  font-family: Georgia, serif;
  color: #057c99;
  &:hover {
    color: black;
  }
`;

const Desc = styled.p`
   margin: 30px 0px;
  font-size: 20px;
  font-weight: 100;
  object-fit:contain
  font-family: Georgia, serif;
  letter-spacing: 2px;
  &:hover {
    color: #057c99;
  }
`;

const Button = styled.button`
  padding: 10px;
  font-size: 15px;
  color: white;
  background: linear-gradient(195deg, #7eb6bf, #126b7a);
  box-shadow: 2px 2px 2px rgba(125, 129, 130);
  border-radius: 40px;
  border: none;
  &:hover {
    color: black;
    background: #22a8c9;
  }
  cursor: pointer;
`;
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
    <Container>
      <h2>OUR DEALS</h2>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined sx={{ fontSize: 60 }} />
      </Arrow>

      <Wrapper slideIndex={slideIndex}>
        <GridComponent>
          {OrdersItems.slice(slideIndex, slideIndex + 3).map((product) => (
            <Slide key={product.id}>
              <DealItem
                key={product.id}
                id={product.id}
                img_url={product.img_url}
                name={product.name}
                price={product.price}
                qty={product.qty}
              />
            </Slide>
          ))}
        </GridComponent>
      </Wrapper>

      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined sx={{ fontSize: 60 }} />
      </Arrow>
    </Container>
  );
}

export default DealsComponent;
