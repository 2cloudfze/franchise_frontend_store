import { useContext } from "react";
import { useRouter } from "next/router";
import CartContext from "@/context/CartContext/cart-context";

import CheckOutItem from "./CheckOutItem";

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

      <button className="check-button" onClick={() => router.push("/checkout")}>
        Checkout
      </button>

      <style jsx>{`
        .check-button {
          width: 60%;
          height: 40px;
          border: none;
          margin-top: 10px;
          // padding: 15px 20px;
          background: linear-gradient(195deg, #1260a3, #1a73e8, #36c7c7);
          color: white;
          cursor: pointer;
        }

        // .context-values{
        //   margin-left:"50px";
        // }
      `}</style>
    </>
  );
}
