import React from "react";
import styled from "@emotion/styled";
import Pay from "@/pages/checkout/pay";
import CartContext from "@/context/CartContext/cart-context";
import { useContext } from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import MDBox from "@/components/MDBox";
import HeaderTypography from "@/components/Typography/HeaderTypography";
import ButtonTypography from "@/components/Typography/ButtonTYpography";
import SubHeaderTypography from "@/components/Typography/SubHeaderTypography";
function Checkout() {
  const cartContext = useContext(CartContext);

  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <>
      <DefaultLayout>
        <MDBox marginTop="35px" marginLeft="550px" marginBottom="90px">
          <MDBox
            sx={{
              marginBottom: "50px",
              display: "felx",
              border: "0.5px solid #2A2A72",
              borderRadius: "10px",
              padding: "20px",
              height: "50vh",
              width: "50%",
            }}
          >
            <HeaderTypography fontSize="19px" marginLeft="118px">
              ORDER SUMMARY
            </HeaderTypography>

            <MDBox sx={{ display: "flex", marginTop: "30px" }}>
              <SubHeaderTypography fontSize="14px">
                Subtotal
              </SubHeaderTypography>
              <SubHeaderTypography fontSize="14px" marginLeft="182px">
                $ {cartContext.totalAmount.toFixed(2)}
              </SubHeaderTypography>
            </MDBox>
            <MDBox sx={{ display: "flex", marginTop: "30px" }}>
              <SubHeaderTypography fontSize="14px">
                Estimated Shipping
              </SubHeaderTypography>
              <SubHeaderTypography fontSize="14px" marginLeft="88px">
                $ 0.00
              </SubHeaderTypography>
            </MDBox>
            <MDBox sx={{ display: "flex", marginTop: "30px" }}>
              <SubHeaderTypography fontSize="14px">
                Shipping Discount
              </SubHeaderTypography>
              <SubHeaderTypography fontSize="14px" marginLeft="95px">
                $ -0.00
              </SubHeaderTypography>
            </MDBox>

            <SubHeaderTypography marginLeft="78px">
              <Pay />
            </SubHeaderTypography>

            <MDBox type="total" sx={{ display: "flex", marginTop: "30px" }}>
              <SubHeaderTypography fontSize="14px" marginLeft="3px">
                Total
              </SubHeaderTypography>
              <SubHeaderTypography fontSize="14px" marginLeft="214px">
                ${cartContext.totalAmount.toFixed(2)}
              </SubHeaderTypography>
            </MDBox>
            <SubHeaderTypography>
              <ButtonTypography marginLeft="111px">
                PLACE ORDER
              </ButtonTypography>
            </SubHeaderTypography>
          </MDBox>
        </MDBox>
      </DefaultLayout>
    </>
  );
}

export default Checkout;
