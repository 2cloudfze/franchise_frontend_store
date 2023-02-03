import HomeProducts from "@/pages/home/components/HomeProducts";
import Slider from "../../components/Slider";

import DealsComponent from "./components/DealsComponent";

import DefaultLayout from "@/components/Layouts/DefaultLayout";
function Home() {
  return (
    <DefaultLayout isLayoutColumn={true}>
      <Slider />
      <HomeProducts />
      <DealsComponent />
    </DefaultLayout>
  );
}

export default Home;
