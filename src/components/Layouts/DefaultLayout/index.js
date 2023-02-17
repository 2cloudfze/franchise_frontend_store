import MDBox from "@/components/MDBox";
import Page from "@/components/Page";
function DefaultLayout({ children }) {
  return (
    <Page>
      <MDBox>{children}</MDBox>
    </Page>
  );
}

export default DefaultLayout;
