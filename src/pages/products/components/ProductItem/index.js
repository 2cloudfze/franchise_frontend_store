import { useRouter } from "next/router";
import useQueryBuilder from "@/hook/use-query-builder";
import CartContext from "@/context/CartContext/cart-context";
import { useContext } from "react";
import SnackBarButton from "@/pages/products/components/SnackBarButton";
import BodyDescTypography from "@/components/Typography/BodyDescTypography";
import Card from "@mui/material/Card";
import MDBox from "@/components/MDBox";
import { CardContent, CardActions } from "@mui/material";
import ButtonTypography from "@/components/Typography/ButtonTYpography";
import ImageContainer from "@/components/ImageContainer";
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

  const { head, queryString } = useQueryBuilder({
    query: `sku_str:${partNumber}`,
    rowCount: 0,
    isSku: true,
  });

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

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "auto",
      }}
    >
      <CardContent sx={{ flex: "1 0 auto" }} onClick={onClickHandler}>
        <MDBox height="100%">
          <ImageContainer
            imageUrl={
              img_url
                ? img_url
                : `https://d2v8x7eqx4g1su.cloudfront.net/brand_images/${manuName.toLowerCase()}.jpg`
            }
          />
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
