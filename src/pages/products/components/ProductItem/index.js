import { useRouter } from "next/router";
import useQueryBuilder from "@/hook/use-query-builder";
import CartContext from "@/context/CartContext/cart-context";
import { useContext, useState } from "react";
import SnackBarButton from "@/pages/products/components/SnackBarButton";
import BodyDescTypography from "@/components/Typography/BodyDescTypography";
import Card from "@mui/material/Card";
import MDBox from "@/components/MDBox";
import { CardContent, CardActions } from "@mui/material";
import ButtonTypography from "@/components/Typography/ButtonTYpography";
import ImageContainer from "@/components/ImageContainer";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteSharpIcon from "@mui/icons-material/FavoriteSharp";

export default function ProductItem({
  id,
  name,
  img_url,
  price,
  manuName,
  partNumber,
  cat,
  inStock,
  description,
}) {
  const router = useRouter();
  const cartContext = useContext(CartContext);
  const [loading, setLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);
  const { head, queryString } = useQueryBuilder({
    query: `sku_str:${partNumber}`,
    rowCount: 0,
    isSku: true,
  });

  const favoriteClick = () => {
    setIsFavorite(!isFavorite);
  };
  const onClickHandler = () =>
    router.push({
      pathname: "/products/productdetails/" + head,
      query: { data: `${queryString}`, id },
    });

  const item = {
    id,
    name,
    img_url: img_url
      ? img_url
      : `https://d2v8x7eqx4g1su.cloudfront.net/brand_images/${manuName.toLowerCase()}.jpg`,
    price,
    partNumber,
    cat,
  };
  const onLoadHandler = () => setLoading(false);
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "auto",
      }}
    >
      <MDBox>
        {isFavorite ? (
          <FavoriteSharpIcon
            fontSize="medium"
            onClick={favoriteClick}
            style={{
              color: "red",
              position: "absolute",
              top: "4%",
              right: "4%",
              cursor: "pointer",
            }}
          />
        ) : (
          <FavoriteBorderOutlinedIcon
            fontSize="medium"
            onClick={favoriteClick}
            style={{
              color: "red",
              position: "absolute",
              top: "4%",
              right: "4%",
              cursor: "pointer",
            }}
          />
        )}
      </MDBox>
      <CardContent onClick={onClickHandler}>
        <MDBox height="100%">
          <ImageContainer
            onLoad={onLoadHandler}
            imageUrl={
              img_url
                ? img_url
                : `https://d2v8x7eqx4g1su.cloudfront.net/brand_images/${manuName.toLowerCase()}.jpg`
            }
          />
          <MDBox display="flex" justifyContent="center">
            {loading && (
              <MDBox display="flex" justifyContent="center">
                <ImageContainer
                  position="absolute"
                  top="10%"
                  left="30%"
                  height={150}
                  width={170}
                  maxHeight={{ xs: 1000, md: 1000 }}
                  maxWidth={{ xs: 1000, md: 1000 }}
                  imageUrl={"/assets/imgLoading/hourglass.gif"}
                />
              </MDBox>
            )}
          </MDBox>
          <MDBox pb={1}>
            {description ? (
              <BodyDescTypography fontSize={18} width="100%">
                {description}
              </BodyDescTypography>
            ) : (
              <BodyDescTypography>{manuName}</BodyDescTypography>
            )}
          </MDBox>
          <MDBox
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            <BodyDescTypography color="grey">Stock :</BodyDescTypography>
            <BodyDescTypography color={inStock ? "green" : "red"}>
              {inStock ? " Available" : " Please check Availability"}
            </BodyDescTypography>
          </MDBox>
          <MDBox display="flex" flexDirection="row" justifyContent="flex-end">
            <BodyDescTypography fontSize={18}>${price}</BodyDescTypography>
          </MDBox>
        </MDBox>
      </CardContent>
      <MDBox pt={2}>
        <CardActions
          sx={{
            paddingLeft: 2,
            paddingRight: 2,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <ButtonTypography onClick={onClickHandler}>View</ButtonTypography>
          <SnackBarButton item={item} cartContext={cartContext} />
        </CardActions>
      </MDBox>
    </Card>
  );
}
