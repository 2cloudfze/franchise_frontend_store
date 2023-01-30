import { useEffect, useState } from "react";
import Products from "@/pages/products/components/Products";
import { useRouter } from "next/router";
import useHttp from "@/hook/use-http";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { CircleLoader } from 'react-spinners';


export default function LoadSelectedProduct() {
  const router = useRouter();
  const { isLoading, error, sendRequest: runSearch } = useHttp();
  const [products, setProducts] = useState([]);
  


  useEffect(() => {
    if (router.isReady) {
      const { query } = router;
      const parameter = (query.params + "?" + query.data).trim();
      runSearch({ params: parameter }).then((data) => {
        if (data.response && data.response.docs)
          setProducts(data.response.docs);
      });
    }
  }, [router, router.isReady, runSearch]);

  const LoadingComponent = <CircleLoader style={{position: 'absolute',top: '50%',left: '50%',transform: 'translate(-50%, -50%)'}}/>

  const ErrorComponent = <p>{error}</p>;
  const ProductBlock = <Products productData={products} />;
  return (
    
    <DefaultLayout>

      {isLoading ? LoadingComponent : error ? ErrorComponent : ProductBlock} 

      <style jsx>{`
       .circle-loader{
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
