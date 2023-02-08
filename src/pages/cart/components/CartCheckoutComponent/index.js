import { useContext } from "react";
import { useRouter } from "next/router";
import CartContext from "@/context/CartContext/cart-context";

export default function CartCheckoutComponent() {
  const router = useRouter();
  const cartContext = useContext(CartContext);

  return (
    <>  
       
      <p>Shipping cost: TBD</p>
      <p>Discount: -$0</p>
      <p>Tax: TBD</p>
      <p>Total items : {cartContext.items.length}</p>
      <p>Estimated Total: ${cartContext.totalAmount.toFixed(2)}</p>

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
