import { useEffect, useState } from "react";
import Products from "@/pages/products/components/Products";
import { useRouter } from "next/router";
import useHttp from "@/hook/use-http";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { CircleLoader } from "react-spinners";
import useQueryBuilder from "@/hook/use-query-builder";

export default function LoadSelectedProduct() {
  const router = useRouter();
  const { isLoading, error, sendRequest: runSearch } = useHttp();
  const [products, setProducts] = useState([]);
  const [nextCurser, setNextCurser] = useState("*");
  const [currentQuery, setCurrentQuery] = useState("");
  const { head, next } = useQueryBuilder({ query: "*:*" });

  const removeNextCurser = (str) => str.split("&").slice(0, -1).join("&");
  const onNextButtonClickHandler = () => {
    const nextUrl = removeNextCurser(currentQuery);
    const goToUrl = nextUrl + next(nextCurser);
    router.push({
      pathname: "/products/" + head,
      query: { data: `${goToUrl}` },
    });
  };
  useEffect(() => {
    if (router.isReady) {
      const { query } = router;
      const parameter = (query.params + "?" + query.data).trim();
      setCurrentQuery(query.data);
      runSearch({ params: parameter }).then((data) => {
        if (data.response && data.response.docs) {
          setProducts(data.response.docs);
          setNextCurser(data.nextCursorMark);
        }
      });
    }
  }, [, router, router.isReady, runSearch]);

  const LoadingComponent = (
    <CircleLoader
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    />
  );

  const ErrorComponent = <p>{error}</p>;
  const ProductBlock = (
    <>
      <Products productData={products} />
      <button onClick={onNextButtonClickHandler}>next</button>
    </>
  );
  return (
    <DefaultLayout isLayoutColumn={false}>
      {isLoading ? LoadingComponent : error ? ErrorComponent : ProductBlock}

      <style jsx>{`
        .circle-loader {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      `}</style>
    </DefaultLayout>
  );
}

// import { useEffect, useState } from "react";
// import Products from "@/pages/products/components/Products";
// import { useRouter } from "next/router";
// import useHttp from "@/hook/use-http";

// export default function LoadSelectedProduct() {
//   const router = useRouter();
//   const { isLoading, error, sendRequest: runSearch, products } = useHttp();

//   useEffect(() => {
//     if (router.isReady) {
//       const { query } = router;
//       const parameter = (query.params + "?" + query.data).trim();
//       runSearch({
//         params: parameter,
//       });
//     }
//   }, [router, runSearch]);

//   if (isLoading) {
//     return <p>Loading .... </p>;
//   }
//   if (error) {
//     return <p>{error}</p>;
//   }
//   return <Products productData={products} />;
// }
