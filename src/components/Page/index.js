import PageContainer from "@/components/PageContainer";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Page({ title, description, children }) {
  return (
    <PageContainer title={title} description={description}>
      <Header />

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
