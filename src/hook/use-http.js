import { useState, useCallback } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (options) => {
    const apiRoot = "http://solr.arabtr.com/solr/collection1/";
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(apiRoot + options.params, {
        method: "GET",
        headers: options.headers ? options.headers : {},
        body: options.body ? JSON.stringify(options.body) : null,
        redirect: "follow",
      });

      if (!response.ok) {
        throw new Error("Request failed!");
      }
      const data = await response.json();

      setIsLoading(false);
      return data;
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
  }, []);

  return {
    isLoading,
    sendRequest,
    error,
  };
};

export default useHttp;

// import { useState, useCallback } from "react";
// const useHttp = () => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [products, setProducts] = useState([]);

//   const sendRequest = useCallback(async (options) => {
//     const apiRoot = "http://solr.arabtr.com/solr/collection1/";
//     setIsLoading(true);
//     setError(null);
//     try {
//       const response = await fetch(apiRoot + options.params, {
//         method: "GET",
//         headers: options.headers ? options.headers : {},
//         body: options.body ? JSON.stringify(options.body) : null,
//         redirect: "follow",
//       });

//       if (!response.ok) {
//         throw new Error("Request failed!");
//       }
//       const data = await response.json();
//       setProducts(data.response.docs);
//     } catch (err) {
//       setError(err.message || "Something went wrong!");
//     }
//     setIsLoading(false);
//   }, []);

//   return {
//     isLoading,
//     sendRequest,
//     error,
//     products,
//   };
// };

// export default useHttp;
