import HomeProducts from "@/pages/home/components/HomeProducts";
import Slider from "../../components/Slider";

import DealsComponent from "./components/DealsComponent";
import OurProducts from "./components/OurProducts";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
function Home() {
  return (
    <DefaultLayout isLayoutColumn={true}>
      <Slider />
      
      <HomeProducts />
      <DealsComponent />
      <OurProducts />
    </DefaultLayout>
  );
}

export default Home;
