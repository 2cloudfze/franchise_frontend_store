import OrdersComponent from "@/pages/my_orders/components/OrdersComponent";

import GridComponent from "@/components/GridComponent";
import ordersData from "@/db/offlineData/myOrdersData";
import Layout from "@/components/Layouts/DefaultLayout";
import HeaderTypography from "@/components/Typography/HeaderTypography";
export default function OrderProducts() {
  return (
    <div>
      <Layout>
        <HeaderTypography marginLeft="850px" marginTop="70px" fontSize="20px" >ORDERS</HeaderTypography>
        <GridComponent>
          {ordersData.map((product) => (
            <OrdersComponent
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
    </div>
  );
}
