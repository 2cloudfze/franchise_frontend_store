import Head from "next/head";
import MDBox from "../MDBox";

export default function PageContainer({ title, description, children }) {
  return (
    <>
      <Head>
        <title>{title || "Franchise"}</title>
        {description !== false && (
          <meta
            name="description"
            content={description || " E-commerce Franchise site"}
          />
        )}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>{children}</main>
      <style jsx>{`
        main {
          display: flex;
          background-color: #fafafa;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          overflow-x: hidden;
        }
      `}</style>
    </>
  );
}
