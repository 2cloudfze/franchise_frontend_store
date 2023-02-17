import { useRouter } from "next/router";
import BodyDescTypography from "@/components/Typography/BodyDescTypography";
import FlexBox from "@/components/MDSpacer/MDSpacer";
import MDBox from "@/components/MDBox";
import ImageContainer from "@/components/ImageContainer";
import { Card } from "@mui/material";
export default function DealItem({ id, name, img_url, price }) {
  const router = useRouter();
  return (
    <MDBox p={1} display="flex" justifyContent="center" width="50%">
      <Card>
        <ImageContainer
          imageUrl={
            img_url
              ? img_url
              : `https://d2v8x7eqx4g1su.cloudfront.net/brand_images/${manuName.toLowerCase()}.jpg`
          }
        />
        <MDBox ml={2}>
          <BodyDescTypography
            fontSize="10"
            lineHeight="20px"
            flexDirection="column"
          >
            {name}
            <MDBox display="flex" justifyContent="center" mt={2}>
              ${price}
            </MDBox>
          </BodyDescTypography>
        </MDBox>
      </Card>
    </MDBox>
  );
}
