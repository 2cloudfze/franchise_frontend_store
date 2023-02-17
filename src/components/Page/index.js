import PageContainer from "@/components/PageContainer";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MDBox from "../MDBox";

export default function Page({ title, description, children }) {
  return (
    <PageContainer title={title} description={description}>
      <Header />
      <MDBox
        display="flex"
        flexDirection="column"
        width="98%"
        bgColor="#f5f5f5"
      >
        {children}
      </MDBox>
      <Footer />
    </PageContainer>
  );
}
