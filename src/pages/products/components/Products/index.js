import MDBox from "@/components/MDBox";
import BodyDescTypography from "@/components/Typography/BodyDescTypography";
import ProductItem from "@/pages/products/components/ProductItem";
import { Grid } from "@mui/material";

export default function Products({ productData }) {
  return (
    <MDBox py={3}>
      <Grid container spacing={3}>
        {productData && productData.length > 0 ? (
          productData.map((product) => (
            <Grid item key={product.name} xs={12} sm={6} md={4} lg={3}>
              <MDBox height="30%" mb={1.5}>
                <ProductItem
                  key={product.id}
                  id={product.id}
                  name={product.manname}
                  img_url={product.url}
                  price={product.price}
                  description={product.description}
                  inStock={product.inStock}
                  manuName={product.manname}
                  partNumber={product.sku}
                  cat={product.category}
                />
              </MDBox>
            </Grid>
          ))
        ) : (
          <BodyDescTypography>No data found</BodyDescTypography>
        )}
      </Grid>
    </MDBox>
  );
}
