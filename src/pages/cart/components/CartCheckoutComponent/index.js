import { useContext } from "react";
import { useRouter } from "next/router";
import CartContext from "@/context/CartContext/cart-context";

import CheckOutItem from "./CheckOutItem";
import ButtonTypography from "@/components/Typography/ButtonTYpography";

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
        value={cartContext.totalAmount.toFixed(2)}
        fontSize={20}
        color="black"

      />

      <ButtonTypography width="60%" marginLeft="100px" marginTop="20px" onClick={() => router.push("/checkout")}>
        Checkout
      </ButtonTypography>
        
    </>
  );
}
