import styled from "@emotion/styled";
import React, { useContext } from "react";
import { useRouter } from "next/router";
import CartContext from "@/context/CartContext/cart-context";
import ButtonTypography from "@/components/Typography/ButtonTYpography";
import BodyDescTypography from "@/components/Typography/BodyDescTypography";
import FlexBox from "@/components/MDSpacer/MDSpacer";
import MDBox from "@/components/MDBox";
import RelatedProduct from "./RelatedProductComp";
import OrdersItems from "@/db/offlineData/myOrdersData";
import Card from "@mui/material/Card";

function Middlecomponent({ product }) {
  const cartContext = useContext(CartContext);
  const router = useRouter();
  return (
    <FlexBox flexDirection="column" spacing={20} justifyContent="center">
      <Card justifyContent="center">
        <FlexBox flexDirection="row" spacing={30} justifyContent="center">
          <MDBox
            mt={8}
            pr={20}
            key="BaseImage"
            component="img"
            sx={{
              objectFit: "scale-down",
              height: 283,
              width: 450,
              maxHeight: { xs: 333, md: 267 },
              maxWidth: { xs: 450, md: 350 },
              borderRadius: [2, 2, 2, 2],
            }}
            src={
              product.url
                ? product.url
                : `https://d2v8x7eqx4g1su.cloudfront.net/brand_images/${product.manname.toLowerCase()}.jpg`
            }
            alt="Image"
          />

          <MDBox p={8}>
            <BodyDescTypography width="880px" lineHeight="35px">
              {product.description}
            </BodyDescTypography>
            <BodyDescTypography> {`$${product.price}`}</BodyDescTypography>
            <BodyDescTypography>
              {product.inStock ? "instock" : "out of stock"}
            </BodyDescTypography>
            <BodyDescTypography>{product.condition}</BodyDescTypography>
            <ButtonTypography onClick={() => cartContext.addItem(product)}>
              Add to cart
            </ButtonTypography>
          </MDBox>
        </FlexBox>
      </Card>

      <BodyDescTypography>Related Products</BodyDescTypography>

      <FlexBox flexDirection="row" spacing={10}>
        {OrdersItems.map((product) => (
          <MDBox>
            <RelatedProduct
              key={product.id}
              img_url={product.img_url}
              name={product.name}
              price={product.price}
            />
          </MDBox>
        ))}
      </FlexBox>
    </FlexBox>
  );
}

export default Middlecomponent;
