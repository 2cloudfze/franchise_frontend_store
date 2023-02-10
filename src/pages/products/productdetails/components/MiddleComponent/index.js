import styled from "@emotion/styled";
import React, { useContext } from "react";
import { useRouter } from "next/router";
import CartContext from "@/context/CartContext/cart-context";
const Section = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Description = styled.div`
  display: felx;
  position: absolute;
  top: 50%;
  left: 50%;
  font-family: plutomedium;
  font-size: 12px;
  font-weight: 100;
  margin-left: 5px;
`;
const Container = styled.div`
  position: relative;
  top: 4%;
  left: 60%;
  height: 100%;
  width: 700px;
  margin-top: 60px;
`;
const Button = styled.button`
  width: 20%;
  border: none;
  margin-top: 65px;
  padding: 20px 20px;
  background: white;
  color: black;
  border: 2px solid black;
  font-family: plutomedium;
  cursor: pointer;
  position: absolute;
  top: 60%;
  margin-left: 60%;
  margin-bottom: 30px;
  &:hover {
    color: #faf9f5;
    cursor: pointer;
    background: #262522;
  }
`;
const Title = styled.h2`
  margin-top: 10px;

  font-weight: 100;
`;

const Price = styled.span`
  margin-top: 10px;
`;

const Availability = styled.span`
  margin-top: 10px;
`;

const Condition = styled.span`
  margin-top: 10px;
`;
const styles = {
  color: "white",
  padding: "16px",
  maxWidth: "400px",
  width: "400px",
};

function Middlecomponent({ product }) {
  const cartContext = useContext(CartContext);
  const router = useRouter();
  return (
    <Section>
      <div>
        <Container>
          <img
            style={styles}
            src={
              product.url
                ? product.url
                : `https://d2v8x7eqx4g1su.cloudfront.net/brand_images/${product.manname.toLowerCase()}.jpg`
            }
          />
        </Container>
        <br />
        <Description>
          <Title>{product.description}</Title>

          <Price>{`$${product.price}`}</Price>
          <br />
          <Availability>
            {product.inStock ? "instock" : "out of stock"}
          </Availability>
          <br />
          <Condition>{product.condition}</Condition>
        </Description>
        <Button onClick={() => cartContext.addItem(product)}>
          Add To Cart
        </Button>
      </div>
    </Section>
  );
}

export default Middlecomponent;
