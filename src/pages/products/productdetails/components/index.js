import React from "react";
import Product from "@/pages/products/productdetails/components/MiddleComponent";
import RelatedProduct from "./MiddleComponent/RelatedProductComp";
import OrdersItems from "@/db/offlineData/myOrdersData";

function ProductFolder({ productData, selectedId }) {
  return (
    <div className="main-product">
      {productData && productData.length > 0 ? (
        productData.map(
          (product) =>
            product.id === selectedId && (
              <Product key={product.id} product={product} />
            )
        )
      ) : (
        <p>No data found</p>
      )}
      <h4
        style={{
          fontFamily: "plutomedium",
          fontSize: "17px",
          fontWeight: 100,
          marginTop: 100,
        }}
      >
        Related Products
      </h4>
      <div className="related">
        {OrdersItems.map((product) => (
          <div>
            <RelatedProduct
              key={product.id}
              img_url={product.img_url}
              name={product.name}
              price={product.price}
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        .related {
          display: flex;
          flex-direction: row;
          margin-top: 50px;
        }
      `}</style>
    </div>
  );
}

export default ProductFolder;
