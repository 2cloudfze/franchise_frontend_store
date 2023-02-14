import HomeProductItem from "@/pages/home/components/HomeProductItem";
import GridComponent from "@/components/GridComponent";
import offlineProducts from "@/db/offlineData/home";
import { fontWeight } from "@mui/system"; 
export default function HomeCategories() {
  return (
    <>
      <h4
        style={{
          fontFamily: "PlutoMedium",
          fontWeight: 400,
          textAlign: "left",
          letterSpacing: "1px",
          fontSize: "16px",
          marginTop: "50px",
          textTransform: "uppercase",
        }}
      >
        our catalog:
      </h4>
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
    </>
  );
}
