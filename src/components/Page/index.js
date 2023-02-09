import PageContainer from "@/components/PageContainer";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
//import Slider from "@/pages/home/components/Slider"
export default function Page({ title, description, children }) {
  return (
    <PageContainer title={title} description={description}>
      <Header />

      {/* <Slider /> */}
      <div className="content">{children}</div>

      <Footer />
      <style jsx>{`
        .content {
          display: flex;
          // align-items: center;
          flex-direction: column;
            width: 97%;
          // max-width: 1840px;
          

          margin-top: 150px;
        }
      `}</style>
    </PageContainer>
  );
}
