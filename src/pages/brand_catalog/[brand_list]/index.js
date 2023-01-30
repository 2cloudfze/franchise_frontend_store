import Brands from "@/pages/brand_catalog/components/Brands";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import home from "@/db/offlineData/home";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const brandById = (id) => home.find((element) => element.id == id);

function BrandCatalog() {
  const router = useRouter();
  const [brands, setBrands] = useState([]);
  const [parent, setParent] = useState("");
  useEffect(() => {
    if (router.isReady) {
      const { query } = router;
      const id = query.brand_list;
      const data = brandById(id);
      setBrands(data.brands);
      setParent(data.link);
    }
  }, [router, router.isReady]);

  return (
    <DefaultLayout>
      <Brands parent={parent} BrandsData={brands} />
    </DefaultLayout>
  );
}
export default BrandCatalog;
