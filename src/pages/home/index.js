import HomeProducts from "@/pages/home/components/HomeProducts";
import Slider from "../../components/Slider";
import Header from "@/components/Header";
import AsideCategories from "@/components/HeaderCategories";
import DealsComponent from "./components/DealsComponent";
import Footer from "@/components/Footer";
function Home() {
  return (
    <div>
      <Header />
      <AsideCategories />
      <Slider />
      <HomeProducts />
      <DealsComponent />
      <Footer />
    </div>
  );
}

export default Home;
