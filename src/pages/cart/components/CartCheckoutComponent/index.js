import { useContext } from "react";
import { useRouter } from "next/router";
import CartContext from "@/context/CartContext/cart-context";

import CheckOutItem from "./CheckOutItem";
import ButtonTypography from "@/components/Typography/ButtonTYpography";
import MDBox from "@/components/MDBox";

export default function CartCheckoutComponent() {
  const router = useRouter();
  const cartContext = useContext(CartContext);
  return (
    <>
      <CheckOutItem label="Shipping cost" value="TBD" />
      <CheckOutItem label="Discount" value="$0" />
      <CheckOutItem label="Tax" value="TBD" />
      <CheckOutItem
        label="Estimated Total"
        value={`$${cartContext.totalAmount.toFixed(2)}`}
        fontSize={20}
        color="black"
      />
      <MDBox pt={2} display="flex" justifyContent="center">
        <ButtonTypography width="60%" onClick={() => router.push("/checkout")}>
          Checkout
        </ButtonTypography>
      </MDBox>
    </>
  );
}
