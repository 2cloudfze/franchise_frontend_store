import Page from "@/components/Page";
import PromoCard from "@/components/PromoCard";
function DefaultLayout({ children, isLayoutColumn }) {
  return (
    <Page>
      <section id="block">
        {!isLayoutColumn ? (
          <div>
            <PromoCard />
          </div>
        ) : null}
        <div className="main">{children}</div>

        <style jsx>{`
          #block {
            display: flex;
            flex-direction: ${isLayoutColumn ? "column" : "row"};
            justify-content: space-between;
            width: 100%;
          }
          #block .main {
            flex-grow: 1;
            padding-left: 30px;
          }
          @media (max-width: 900px) {
            #block .main {
              padding-left: 0;
            }
          }
        `}</style>
      </section>
    </Page>
  );
}

export default DefaultLayout;
