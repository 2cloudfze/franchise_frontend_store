import GridComponent from "@/components/GridComponent";
import CardComponent from "@/pages/brand_catalog/components/Card";

export default function Brands({ BrandsData, parent }) {
  return (
    <div>
      <GridComponent>
        {BrandsData.map((item) => (
          <CardComponent
            key={item.label}
            image={item.img}
            title={item.label}
            parent={parent}
          />
        ))}
      </GridComponent>

      <style jsx>{`
        .title-content {
          display: flex;
          align-items: center;
          flex-direction: column;
          font-size: 20px;
          font-weight: 500;
          margin-bottom: 40px;
          margin-top: 20px;
          font-family: "Raleway", sans-serif;
          color: #e05177;
        }
      `}</style>
    </div>
  );
}
