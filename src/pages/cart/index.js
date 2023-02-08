import DefaultLayout from "@/components/Layouts/DefaultLayout";
import CartContext from "@/context/CartContext/cart-context";
import { useContext } from "react";
import CartTableComponent from "@/pages/cart/components/CartTableComponent";
import CartCheckoutComponent from "./components/CartCheckoutComponent";
function Cart() {
  const cartContext = useContext(CartContext);
  const NoProductsFound = <img style={{marginLeft:'370px'}} src="/assets/EmptyCart/emptyCart.gif"/>
  return (
    <>
      <DefaultLayout isLayoutColumn={true}>
        <div
          style={{
            backgroundColor: "white",
            position: "relative",
            padding: "80px",
            marginBottom: "400px",
          }}
        >
          {cartContext.items.length === 0 ? (
            NoProductsFound
          ) : (
            <>
              <div className="main-box">
                <CartTableComponent cartContext={cartContext} />
              </div>
              <div className="side-box">
                <CartCheckoutComponent />
              </div>
            </>
          )}

          <style jsx>{`
            .main-box {
              width: 900px;
              margin-top: 100px;
              margin-left: 170px;
              margin-bottom: 100px;
              border-top: 1px solid #a2a3a3;
              border-bottom: 1px solid #a2a3a3;
              border-left: none;
              border-right: none;
              border:fixed;
              
            }
            
            .side-box {
              display: flex;
              flex-direction: column;
              // align-items: center;
              justify-content: flex-end;
              position: absolute;
              top: 50%;
              right: 10%;
              margin-right: 90px;
              margin-bottom: 70px;
            }
          `}</style>
        </div>
      </DefaultLayout>
    </>
  );
}

export default Cart;
