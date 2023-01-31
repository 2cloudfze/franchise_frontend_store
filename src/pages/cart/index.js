import DefaultLayout from "@/components/Layouts/DefaultLayout";
import CartContext from "@/context/CartContext/cart-context";
import { useContext } from "react";
import CartTableComponent from "@/pages/cart/components/CartTableComponent";
import CartCheckoutComponet from "./components/CartCheckoutComponent";
function Cart() {
  const cartContext = useContext(CartContext);

  return (
    <>
      <DefaultLayout>
        <div className="main-box">
          <CartTableComponent cartContext={cartContext} />
        </div>
        <div className="side-box">
          <CartCheckoutComponet />
        </div>

        <style jsx>{`
          .main-box {
            display: flex;
            width: 900px;
            // padding:29px;
            margin-top: 100px;
            border-top: 1px solid #a2a3a3;
            border-bottom: 1px solid #a2a3a3;
            
          }
          .side-box {
            position: absolute;
            top: 40%;
            left: 80%;
          }
        `}</style>
      </DefaultLayout>
    </>
  );
}

export default Cart;
