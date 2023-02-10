import { useEffect, useState, useContext } from "react";
import Products from "@/pages/products/components/Products";
import { useRouter } from "next/router";
import useHttp from "@/hook/use-http";
import { CircleLoader } from "react-spinners";
import useQueryBuilder from "@/hook/use-query-builder";
import PaginationContext from "@/context/PaginationContext/pagination-context";
import FilterContext from "@/context/FilterContext/filter-context";
import PaginationContainer from "../components/PaginationContainer";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import styled from "@emotion/styled";

const Container = styled.div`
    height: "100%",
    width: "100%",
    position: "fixed",
    right: 0,
    top: 0,
  `;
export default function LoadSelectedProduct() {
  const router = useRouter();
  const filterContext = useContext(FilterContext);
  const paginationContext = useContext(PaginationContext);
  const { isLoading, error, sendRequest: runSearch } = useHttp();
  const [products, setProducts] = useState([]);
  const [nextCurser, setNextCurser] = useState("*");
  const [currentQuery, setCurrentQuery] = useState("");
  const { head, next } = useQueryBuilder({ query: "*:*" });
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (router.isReady) {
      const { query } = router;
      const parameter = (query.params + "?" + query.data).trim();
      setCurrentQuery(query.data);
      runSearch({ params: parameter }).then((data) => {
        if (data.response && data.response.docs) {
          setProducts(data.response.docs);
          paginationContext.setCurrentCursor(query.currentCurser);
          setNextCurser(data.nextCursorMark);
          if (query.currentCurser === "*") {
            paginationContext.initialize(data.response.numFound, 100);
          }
        }
      });
    }
  }, [router, router.isReady, runSearch]);

  const removeNextCurser = (str) => str.split("&").slice(0, -1).join("&");

  const onButtonClickHandler = (action) => {
    paginationContext.addCursors(nextCurser);
    const nextUrl = removeNextCurser(currentQuery);
    let goToUrl;
    if (action === "next") {
      goToUrl = nextUrl + next(nextCurser);
      router.push({
        pathname: "/products/" + head,
        query: { data: `${goToUrl}`, currentCurser: nextCurser },
      });
    } else if (paginationContext.currentCursor !== "*") {
      const currentCurserIndex = paginationContext.cursors.indexOf(
        paginationContext.currentCursor
      );

      const previousCursor = paginationContext.cursors[currentCurserIndex - 1];

      goToUrl = nextUrl + next(previousCursor);
      router.push({
        pathname: "/products/" + head,
        query: { data: `${goToUrl}`, currentCurser: previousCursor },
      });
    }
  };

  const LoadingComponent = (
    <div style={{ height: "1000px" }}>
      <CircleLoader
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );

  const renderMenu = () => (
    <Container>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {filterContext.filterItems.map((element, index) => (
          <MenuItem key={index} onClick={handleClose}>
            {/*TODO: bring a check box and filter functionality*/}
            {element.label}
          </MenuItem>
        ))}
      </Menu>
    </Container>
  );

  const ErrorComponent = <p>{error}</p>;
  const ProductBlock = (
    <>
      <Products productData={products} />
      <PaginationContainer buttonHandler={onButtonClickHandler} />
    </>
  );
  return (
    <div>
      <DefaultLayout>
        <div className="filter-block">
          <p onClick={handleOpenMenu}>Filter</p>
          <p>Sort</p>
        </div>
        {isLoading ? LoadingComponent : error ? ErrorComponent : ProductBlock}
        {renderMenu()}
      </DefaultLayout>

      <style jsx>{`
        p {
          font-family: "AvenirLTStd-Roman";
          font-weight: bold;
          text-transform: uppercase;
          font-size: 12px;
          cursor: pointer;
          padding: 20px;
          text-decoration: none;
          position: relative;
          padding-bottom: 5px;
        }

        p::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          border-bottom: 2px solid black;
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.5s ease-in-out;
        }

        p:hover::after {
          transform: scaleX(1);
          transform-origin: left;
        }
        .filter-block {
          display: flex;
          flex-direction: row;
          justify-content: right;
        }
        .circle-loader {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .next-button {
          background-color: red;
          color: red;
          width: 100px;
        }
        .container {
          flex-direction: column;
          justify-content: center;
          margin: 0;
        }
      `}</style>
    </div>
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
