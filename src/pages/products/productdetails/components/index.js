import React from "react";
import Product from "@/pages/products/productdetails/components/MiddleComponent";
import GridComponent from "@/components/GridComponent";

function ProductFolder({ productData }) {
  return (
    <GridComponent>
      {productData && productData.length > 0 ? (
        productData.map((product) => (
          <Product key={product.id} product={product} />
        ))
      ) : (
        <p>No data found</p>
      )}
    </GridComponent>
  );
}

export default ProductFolder;
