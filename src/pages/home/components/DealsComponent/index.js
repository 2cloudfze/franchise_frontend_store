import DealItem from "./DealItem";

import GridComponent from "@/components/GridComponent";
import dealsData from "@/db/offlineData/myOrdersData";
export default function DealsComponent() {
    
  return (
    <div>
      
        <h1 className="title-content">OUR DEALS</h1>
        <GridComponent>
          {dealsData.map((product) => (
            <DealItem
              key={product.id}
              id={product.id}
              img_url={product.img_url}
              name={product.name}
              price={product.price}
              qty={product.qty}
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
          margin-top: 160px;
          font-family: Georgia, serif;
          color: black;
        }
      `}</style>
    </div>
  );
}
