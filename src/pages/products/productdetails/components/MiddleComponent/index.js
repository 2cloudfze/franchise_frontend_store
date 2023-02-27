import React, { useContext } from "react";
import { useRouter } from "next/router";
import CartContext from "@/context/CartContext/cart-context";
import ButtonTypography from "@/components/Typography/ButtonTYpography";
import BodyDescTypography from "@/components/Typography/BodyDescTypography";
import FlexBox from "@/components/MDSpacer/MDSpacer";
import MDBox from "@/components/MDBox";
import RelatedProduct from "./RelatedProductComp";
import OrdersItems from "@/db/offlineData/relatedProduct";
import Card from "@mui/material/Card";
import ImageContainer from "@/components/ImageContainer";

function Middlecomponent({ product, img_url }) {
  const cartContext = useContext(CartContext);
  const router = useRouter();
  return (
    <FlexBox
      flexDirection="column"
      marginTop="80px"
      spacing={20}
      justifyContent="center"
    >
      <Card justifyContent="center">
        <FlexBox flexDirection="row" spacing={30} justifyContent="center">
          <ImageContainer
            imageUrl={
              product.url
                ? product.url
                : `https://d2v8x7eqx4g1su.cloudfront.net/brand_images/${product.manname.toLowerCase()}.jpg`
            }
          />

          <MDBox p={8}>
            <MDBox width="50%">
              <BodyDescTypography lineHeight="35px" isDetails>
                {product.description}
              </BodyDescTypography>
            </MDBox>
            <BodyDescTypography> {`$${product.price}`}</BodyDescTypography>
            <BodyDescTypography>
              {product.inStock ? "inStock" : "out of stock"}
            </BodyDescTypography>
            <BodyDescTypography>{product.condition}</BodyDescTypography>
            <ButtonTypography
              onClick={() =>
                cartContext.addItem({
                  ...product,
                  qty: 1,
                  total: product.price * 1,
                })
              }
            >
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
