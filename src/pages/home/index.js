import HomeProducts from "@/pages/home/components/HomeProducts";
import Slider from "../../components/Slider";
import AnimatedDiv from "@/components/AnimatedDiv";

import DealsComponent from "./components/DealsComponent";
import OurProducts from "./components/OurProducts";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
function Home() {
  return (
    <DefaultLayout isLayoutColumn={true}>
      <Slider />
     <AnimatedDiv>
      <HomeProducts />
      </AnimatedDiv>
      <AnimatedDiv>
      <DealsComponent />
      </AnimatedDiv>
      <AnimatedDiv>
      <OurProducts />
      </AnimatedDiv>
    </DefaultLayout>
  );
}

export default Home;
