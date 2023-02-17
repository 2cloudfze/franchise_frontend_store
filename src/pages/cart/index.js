import DefaultLayout from "@/components/Layouts/DefaultLayout";
import CartContext from "@/context/CartContext/cart-context";
import { useContext } from "react";
import CartTableComponent from "@/pages/cart/components/CartTableComponent";
import CartCheckoutComponent from "./components/CartCheckoutComponent";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import MDBox from "@/components/MDBox";
import HeaderTypography from "@/components/Typography/HeaderTypography";
import FlexBox from "@/components/MDSpacer/MDSpacer";
import BodyDescTypography from "@/components/Typography/BodyDescTypography";
function Cart() {
  const cartContext = useContext(CartContext);
  const NoProductsFound = (
    <img
      style={{ marginLeft: "370px" }}
      src="/assets/EmptyCart/emptyCart.gif"
    />
  );
  return (
    <>
      <DefaultLayout isLayoutColumn={true}>
        <MDBox
          style={{
            backgroundColor: "white",
            position: "relative",
            padding: "40px",
          }}
        >
          {cartContext.items.length === 0 ? (
            NoProductsFound
          ) : (
            <>
              <ShoppingBagIcon
                sx={{
                  position: "absolute",
                  top: "108px",
                  right: "970px",
                  width: "36px",
                  height: "36px",
                }}
              />
              <HeaderTypography
                marginLeft="800px"
                marginTop="80px"
                fontSize="19px"
              >
                My cart
              </HeaderTypography>

              <CartTableComponent cartContext={cartContext} />

              <FlexBox
                justifyContent="flex-end"
                flexDirection="column"
                position="absolute"
                top="35%"
                right="8%"
              >
                <CartCheckoutComponent />
              </FlexBox>

              <BodyDescTypography style={{ position: "absolute", top: "62%", left: "83%" }}>
                <FlexBox position="absolute"
                top="80%"
                left="37%">
                {cartContext.items.length} Items
                </FlexBox >
              </BodyDescTypography>
              <BodyDescTypography style={{ position: "absolute", top: "82%", left: "90%" }}>
              <FlexBox position="absolute"
                top="80%"
                left="54%">
                ${cartContext.totalAmount.toFixed(2)}
                </FlexBox >
              </BodyDescTypography>
            </>
          )}
        </MDBox>
      </DefaultLayout>
    </>
  );
}

export default Cart;
