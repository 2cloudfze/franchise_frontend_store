import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { useContext } from "react";
import FilterContext from "@/context/FilterContext/filter-context";
import home from "@/db/offlineData/home";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import CatalogProducts from "../components/CatalogProducts";
import { CircleLoader } from "react-spinners";

const brandById = (id) => home.find((element) => element.id == id);

function BrandCatalog() {
  const filterContext = useContext(FilterContext);
  const router = useRouter();
  const [parent, setParent] = useState("");
  useEffect(() => {
    if (router.isReady) {
      const { query } = router;
      const id = query.catalog_id;
      const data = brandById(id);
      filterContext.initialize({
        brands: data.brands,
        selectedCategory: data.link,
      });
      setParent(data.link);
    }
  }, [router, router.isReady]);
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
  return (
    <DefaultLayout>
      {parent !== "" ? (
        <CatalogProducts catalogName={parent} />
      ) : (
        LoadingComponent
      )}
    </DefaultLayout>
  );
}
export default BrandCatalog;
