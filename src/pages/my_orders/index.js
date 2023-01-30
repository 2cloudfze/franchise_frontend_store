import OrdersComponent from "@/pages/my_orders/components/OrdersComponent";

import GridComponent from "@/components/GridComponent";
import ordersData from "@/db/offlineData/myOrdersData";
import Layout from "@/components/Layouts/DefaultLayout"
export default function HomeProducts() {
 

  return (

    
    <div>
        <Layout>

<h1 className="title-content">MY ORDERS</h1>
    <GridComponent>
          {ordersData.map((product) => (
        < OrdersComponent
          key={product.id}
          id={product.id}
          img_url={product.img_url}
          name={product.name}
          price={product.price}
          qty={product.qty}
          orderstatus={product.Orderstatus}
         

         />
      ))}
    </GridComponent>
    </Layout>
     <style jsx>{`
     .title-content {
       display: flex;
       align-items: center;
       flex-direction: column;
       font-size: 20px;
       font-weight: 500;
       margin-bottom: 40px;
       margin-top: 20px;
       font-family: Georgia, serif;
       color: black;
     }
   `}</style>
 </div>
  );
}