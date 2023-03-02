import HomeProductItem from "@/pages/home/components/HomeProductItem";

import offlineProducts from "@/db/offlineData/home";
import { Grid } from "@mui/material";
import BodyDescTypography from "@/components/Typography/BodyDescTypography";
import MDBox from "@/components/MDBox";
export default function HomeCategories() {
  return (
    <MDBox p={2}>
      <BodyDescTypography>our catalog:</BodyDescTypography>
      <MDBox py={3}>
        <Grid container spacing={3}>
          {offlineProducts.map((product, index) => (
            <Grid
              item
              key={`${product.name}_${index}`}
              xs={12}
              sm={6}
              md={4}
              lg={3}
            >
              <MDBox height="30%" mb={1.5}>
                <HomeProductItem
                  key={product.id}
                  id={product.id}
                  image={product.image}
                  title={product.title}
                />
              </MDBox>
            </Grid>
          ))}
        </Grid>
      </MDBox>
    </MDBox>
  );
}
