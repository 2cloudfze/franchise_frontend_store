import styled from "@emotion/styled";
import React from "react";

const Container = styled.div``;

const Title = styled.h2``;

const Price = styled.span``;

const Availability = styled.span``;

const Condition = styled.span``;

function Middlecomponent({ product }) {
  console.log(product.url);
  return (
    <div className="main-product">
    <Container >
      <img className="image"
        src={
          product.url
            ? product.url
            : `https://d2v8x7eqx4g1su.cloudfront.net/brand_images/${product.manname.toLowerCase()}.jpg`
        }
      />
       <br/>
      <Title>{product.description}</Title>
      
      <Price>{`$${product.price}`}</Price>
      <br/>
      <Availability>
        {product.inStock ? "instock" : "out of stock"}
        
      </Availability>
      <br />
      <Condition>{product.condition}</Condition>
      </Container>
      <style jsx>{`
        .main-product{
          
          position:absolute;
          top:50%;
          left:50%;
        }
       
        
      `}
      
      </style>

      </div>

   
  );
}

export default Middlecomponent;
