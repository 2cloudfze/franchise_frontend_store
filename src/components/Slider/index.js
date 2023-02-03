import React, { useState } from "react";
import styled from "@emotion/styled";
import { sliderItems } from "@/db/offlineData/slider";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { useEffect } from "react";

const Container = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  position: relative;
  overflow: hidden;
  background-color: white;
`;

const Arrow = styled.div`
  width: 60px;
  height: 50px;
  background-color: #057c99;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
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
  width: 100vw;
  height: 80vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
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

function slider() {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 3);
    } else {
      setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0);
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0);
    }, 5000);
    return () => clearInterval(interval);
  }, [slideIndex]);

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>

      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>SHOP NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>

      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
}

export default slider;
