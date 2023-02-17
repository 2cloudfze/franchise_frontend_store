import React from "react";
import { useEffect, useState } from "react";
import ProductFolder from "@/pages/products/productdetails/components";
import { useRouter } from "next/router";
import useHttp from "@/hook/use-http";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import HeaderTypography from "@/components/Typography/HeaderTypography";

function ProductDetails() {
  const router = useRouter();
  const { isLoading, error, sendRequest: runSearch } = useHttp();
  const [products, setProducts] = useState([]);
  const [productId, setProductId] = useState();
  useEffect(() => {
    if (router.isReady) {
      const { query } = router;
      const parameter = (query.product_query + "?" + query.data).trim();
      setProductId(query.id);
      runSearch({ params: parameter }).then((data) => {
        if (data.response && data.response.docs)
          setProducts(data.response.docs);
      });
    }
  }, [router, router.isReady, runSearch]);

  const LoadingComponent = <HeaderTypography >Loading .... </HeaderTypography>;
  const ErrorComponent = <HeaderTypography>{error}</HeaderTypography>;
  const ProductBlock = (
    <ProductFolder productData={products} selectedId={productId} />
  );

  return (
    <DefaultLayout isLayoutColumn={true}>
      {isLoading ? LoadingComponent : error ? ErrorComponent : ProductBlock}
    </DefaultLayout>
  );
}

export default ProductDetails;
