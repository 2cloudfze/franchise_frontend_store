import DefaultLayout from "@/components/Layouts/DefaultLayout";
import CartContext from "@/context/CartContext/cart-context";
import { useContext } from "react";
import { Card } from "@mui/material";
import CartCheckoutComponent from "./components/CartCheckoutComponent";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import MDBox from "@/components/MDBox";
import HeaderTypography from "@/components/Typography/HeaderTypography";
import BodyDescTypography from "@/components/Typography/BodyDescTypography";
import ImageContainer from "@/components/ImageContainer";
import CartTable from "./components/CartTable";
function Cart() {
  const cartContext = useContext(CartContext);
  const NoProductsFound = (
    <>
      <MDBox display="flex" justifyContent="center">
        <ImageContainer
          marginLeft={"220px"}
          height={500}
          width={1000}
          maxHeight={{ xs: 1000, md: 1000 }}
          maxWidth={{ xs: 1000, md: 1000 }}
          imageUrl={"/assets/EmptyCart/empty-cart.gif"}
        />
      </MDBox>
      <MDBox display="flex" justifyContent="center">
        <BodyDescTypography>No Items in your cart</BodyDescTypography>
      </MDBox>
    </>
  );
  return (
    <>
      <DefaultLayout isLayoutColumn={true}>
        <MDBox
          style={{
            backgroundColor: "white",
            position: "relative",
          }}
        >
          <MDBox m={3} display="flex" justifyContent="center">
            <MDBox
              display="flex"
              flexDirection="row"
              justifyContent="space-around"
            >
              <ShoppingBagIcon
                sx={{
                  marginTop: "20px",
                  width: "36px",
                  height: "36px",
                }}
              />
              <HeaderTypography fontSize="19px" marginTop="32px">
                My cart
              </HeaderTypography>
            </MDBox>
          </MDBox>
          {cartContext.items.length === 0 ? (
            NoProductsFound
          ) : (
            <>
              <MDBox
                display="flex"
                flexDirection="row"
                justifyContent="space-evenly"
              >
                <MDBox width="70%">
                  <CartTable />
                </MDBox>

                <Card sx={{ padding: 2, height: "50%", marginTop: "10%" }}>
                  <CartCheckoutComponent />
                </Card>
              </MDBox>
              <MDBox
                width="70%"
                flexDirection="row"
                display="flex"
                justifyContent="space-evenly"
                pt={2}
              >
                <BodyDescTypography>
                  {cartContext.items.length} Items
                </BodyDescTypography>
                <BodyDescTypography>
                  ${cartContext.totalAmount.toFixed(2)}
                </BodyDescTypography>
              </MDBox>
            </>
          )}
        </MDBox>
      </DefaultLayout>
    </>
  );
}

export default Cart;
