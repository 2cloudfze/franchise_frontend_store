import React from "react";
import { useEffect, useState } from "react";
import ProductFolder from "@/pages/products/productdetails/components";
import { useRouter } from "next/router";
import useHttp from "@/hook/use-http";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

function ProductDetails() {
  const router = useRouter();
  const { isLoading, error, sendRequest: runSearch } = useHttp();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (router.isReady) {
      const { query } = router;
      const parameter = (query.product_query + "?" + query.data).trim();
      console.log(parameter);
      runSearch({ params: parameter }).then((data) => {
        if (data.response && data.response.docs)
          setProducts(data.response.docs);
      });
    }
  }, [router, router.isReady, runSearch]);

  const LoadingComponent = <p>Loading .... </p>;
  const ErrorComponent = <p>{error}</p>;
  const ProductBlock = <ProductFolder productData={products} />;

  return (
    <DefaultLayout isLayoutColumn={false}>
      {isLoading ? LoadingComponent : error ? ErrorComponent : ProductBlock}
    </DefaultLayout>
  );
}

export default ProductDetails;
