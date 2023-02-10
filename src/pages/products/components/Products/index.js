import ProductItem from "@/pages/products/components/ProductItem";
import GridComponent from "@/components/GridComponent";

export default function Products({ productData }) {
  return (
    <GridComponent>
      {productData && productData.length > 0 ? (
        productData.map((product) => (
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
        ))
      ) : (
        <p className="nodata">No data found</p>
      )}
      <style jsx>{`
        .nodata {
          position: absolute;
          top: 55%;
          left: 55%;
          transform: translate(-50%, -50%);
          font-size: 30px;
          font: "AvenirLTStd-Roman";
        }
      `}</style>
    </GridComponent>
  );
}
