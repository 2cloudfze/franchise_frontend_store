import PageContainer from "@/components/PageContainer";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
//import Slider from "@/pages/home/components/Slider"
import AsideCategories from "@/components/AsideCategories";
export default function Page({ title, description, children }) {
  return (
    <PageContainer title={title} description={description}>
      <Header />
      <AsideCategories/>
       {/* <Slider /> */}
      <div className="content">{children}</div>

      <Footer />
      <style jsx>{`
        .content {
          display: flex;
          align-items: center;
          flex-direction: column;
          width: 180%;
          max-width: 1700px;
        }
      `}</style>
    </PageContainer>
  );
}
