import Page from "@/components/Page";
import PromoCard from "@/components/PromoCard";
function DefaultLayout({ children, isLayoutColumn }) {
  return (
    <Page>
      <div className="block">
        {!isLayoutColumn && (
          <div>
            <PromoCard />
          </div>
        )}
        <div className="main">{children}</div>

        <style jsx>{`
          .block {
            display: flex;
            flex-direction: ${isLayoutColumn ? "column" : "row"};
            justify-content: space-between;
            width: 100%;
          }
          .main{
            margin-top:30px;
            // padding-left:6px;
            
          }
          
        `}</style>
      </div>
    </Page>
  );
}

export default DefaultLayout;
