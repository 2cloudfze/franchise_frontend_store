import { useRouter } from "next/router";
import BodyDescTypography from "@/components/Typography/BodyDescTypography";
import MDBox from "@/components/MDBox";
import ImageContainer from "@/components/ImageContainer";
import { Card } from "@mui/material";
import AnimatedDiv from "@/components/AnimatedDiv";

export default function DealItem({ id, name, img_url, price }) {
  const router = useRouter();
  return (
    <AnimatedDiv>
      <MDBox p={1} display="flex" justifyContent="center" width="100%">
        <Card sx={{ display: "flex", justifyContent: "center" }}>
          <ImageContainer
            width={420}
            maxWidth={{ xs: 1000, md: 1000 }}
            pr={2}
            cursor="pointer"
            imageUrl={
              img_url
                ? img_url
                : `https://d2v8x7eqx4g1su.cloudfront.net/brand_images/${manuName.toLowerCase()}.jpg`
            }
          />
          <MDBox ml={2}>
            <BodyDescTypography
              fontSize="14px"
              lineHeight="20px"
              flexDirection="column"
            >
              <MDBox display="flex" justifyContent="center">
                {name}
              </MDBox>
              <MDBox display="flex" justifyContent="center" mt={2}>
                ${price}
              </MDBox>
            </BodyDescTypography>
          </MDBox>
        </Card>
      </MDBox>
    </AnimatedDiv>
  );
}
