import React, { useState } from "react";
import styled from "@emotion/styled";
import { sliderItems } from "@/db/offlineData/slider";
import { useEffect } from "react";

import DotTypography from "../Typography/DotTypography";
import MDBox from "../MDBox";

const Container = styled.div`
  width: 100%;
  height: 35%;
  display: flex;
  position: relative;
  overflow: hidden;
  background-color: white;
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
`;

const Image = styled.img`
  height: 100%;
  width: 130%;
`;

const DotContainer = styled.div`
  text-align: center;
  margin-top: 20px;
`;

function slider() {
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
      <Container>
        <Wrapper slideIndex={slideIndex}>
          {sliderItems.map((item) => (
            <Slide key={item.id}>
              <ImgContainer>
                <Image src={item.img} />
              </ImgContainer>
            </Slide>
          ))}
        </Wrapper>
      </Container>
      <DotContainer>
        {sliderItems.map((_, index) => (
          <DotTypography
            clickHandler={() => handleClick(index)}
            id={index}
            selectedIndex={slideIndex}
          />
        ))}
      </DotContainer>
    </MDBox>
  );
}

export default slider;
