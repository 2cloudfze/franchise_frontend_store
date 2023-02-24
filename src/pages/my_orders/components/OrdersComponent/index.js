import ImageContainer from "@/components/ImageContainer";
import MDBox from "@/components/MDBox";
import BodyDescTypography from "@/components/Typography/BodyDescTypography";
import { Card } from "@mui/material";
export default function OrdersComponent({
  id,
  name,
  img_url,
  price,
  qty,
  orderstatus,
}) {
  return (
    <Card>
      <MDBox >
      <ImageContainer marginLeft="65px" imageUrl={img_url ? img_url : (src = { img_url })} />

      <BodyDescTypography textAlign="center" fontSize="16px" padding="10px">Name: {name}</BodyDescTypography>
      <BodyDescTypography textAlign="center" fontSize="14px">Price: {price} </BodyDescTypography>
      <BodyDescTypography textAlign="center" fontSize="14px" >Quantity:{qty}</BodyDescTypography>

      <BodyDescTypography textAlign="center" fontSize="14px">subtotal: {price * qty}</BodyDescTypography>
      <BodyDescTypography textAlign="center" fontSize="14px">orderstatus: {orderstatus}</BodyDescTypography>
      </MDBox>
    </Card>
  );
}
