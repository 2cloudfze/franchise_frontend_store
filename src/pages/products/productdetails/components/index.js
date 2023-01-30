import React from "react";
import Product from "@/pages/products/productdetails/components/Middlecomponent";
import GridComponent from "@/components/GridComponent";

function Productfolder({ productData }) {
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

export default Productfolder;
