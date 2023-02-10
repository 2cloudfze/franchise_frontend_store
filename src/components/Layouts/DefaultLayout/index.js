import Page from "@/components/Page";
function DefaultLayout({ children }) {
  return (
    <Page>
      <div className="block">
        <div className="main">{children}</div>
        <style jsx>{`
          .block {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            width: 100%;
            padding: 20px;
          }
          .main {
            margin-top: 30px;
          }
        `}</style>
      </div>
    </Page>
  );
}

export default DefaultLayout;
