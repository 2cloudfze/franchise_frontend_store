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
          flex-direction: column;
          width: 98%;
          background-color: #f5f5f5;
          margin-top: 150px;
        }
      `}</style>
    </PageContainer>
  );
}
