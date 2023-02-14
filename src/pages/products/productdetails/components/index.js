import React from "react";
import FlexBox from "@/components/MDSpacer/MDSpacer";
import Product from "@/pages/products/productdetails/components/MiddleComponent";
import BodyDescTypography from "@/components/Typography/BodyDescTypography";
function ProductFolder({ productData, selectedId }) {
  return (
    <FlexBox >
      
      {productData && productData.length > 0 ? (
        productData.map(
          (product) =>
            product.id === selectedId && (
              <Product key={product.id} product={product} />
            )
        )
      ) : (
        <BodyDescTypography>No data found</BodyDescTypography>
      )}
     
       </FlexBox>
      
    
        
     
      

     
  );
}

export default ProductFolder;
