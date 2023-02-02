import DefaultLayout from "@/components/Layouts/DefaultLayout";
import HomeProducts from "@/pages/home/components/HomeProducts";
import Slider from "../../components/Slider";
import Header from "@/components/Header";
import AsideCategories from "@/components/AsideCategories";
import Footer from "@/components/Footer";
import PromoCard from "@/components/PromoCard";
function Home() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',   
   }}>
    <Header />
    <AsideCategories />
    <Slider />
     <HomeProducts />
     <Footer />
    </div>
  );
}

export default Home;
