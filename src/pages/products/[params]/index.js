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
import MDBox from "@/components/MDBox";
import BodyDescTypography from "@/components/Typography/BodyDescTypography";

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
    <MDBox width="100%">
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
    </MDBox>
  );

  const ErrorComponent = <p>{error}</p>;
  const ProductBlock = (
    <MDBox>
      <Products productData={products} />
      <PaginationContainer buttonHandler={onButtonClickHandler} />
    </MDBox>
  );
  return (
    <DefaultLayout>
      <MDBox display="flex" flexDirection="row" justifyContent="flex-end">
        <MDBox p={2}>
          <BodyDescTypography onClickHandler={handleOpenMenu}>
            Filter
          </BodyDescTypography>
        </MDBox>
        <MDBox p={2}>
          <BodyDescTypography>Sort</BodyDescTypography>
        </MDBox>
      </MDBox>
      {isLoading ? LoadingComponent : error ? ErrorComponent : ProductBlock}
      {renderMenu()}
    </DefaultLayout>
  );
}
