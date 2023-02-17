import { useRouter } from "next/router";
import HeaderTypography from "@/components/Typography/HeaderTypography";
import MDBox from "@/components/MDBox";
import { Card } from "@mui/material";
import ImageContainer from "@/components/ImageContainer";

export default function HomeProductItem({ id, image, title }) {
  const router = useRouter();

  return (
    <MDBox
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card>
        <MDBox p={1} onClick={() => router.push(`/catalog_products/${id}`)}>
          <MDBox pl={6}>
            <ImageContainer imageUrl={image ? image : (src = { image })} />
          </MDBox>
          <MDBox
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <HeaderTypography>{title}</HeaderTypography>
          </MDBox>
        </MDBox>
      </Card>
    </MDBox>
  );
}
