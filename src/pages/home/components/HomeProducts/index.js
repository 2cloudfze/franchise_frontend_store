import HomeProductItem from "@/pages/home/components/HomeProductItem";

import GridComponent from "@/components/GridComponent";
import offlineProducts from "@/db/offlineData/home";

export default function HomeCategories() {
  return (
    <GridComponent>
      {offlineProducts.map((product) => (
        <HomeProductItem
          key={product.id}
          id={product.id}
          image={product.image}
          title={product.title}
          brands={product.brands}
          link={product.link}
        />
      ))}
    </GridComponent>
  );
}
