import DefaultLayout from "@/components/Layouts/DefaultLayout";
import CartContext from "@/context/CartContext/cart-context";
import { useContext } from "react";
import CartTableComponent from "@/pages/cart/components/CartTableComponent";
import CartCheckoutComponent from "./components/CartCheckoutComponent";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
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
        <div 
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
              <ShoppingBagIcon sx={{position:'absolute',top: '60px',right: '970px', width: '36px',height: '36px'}} />
              <h1 className="cart-header">My cart</h1>
              
                <CartTableComponent cartContext={cartContext} />
              
              <div className="side-box">
                <CartCheckoutComponent />
              </div>
              <p style={{position:'absolute',top:'82%',left:'23%'}}> {cartContext.items.length} Items</p>
              <p style={{position:'absolute',top:'82%',left:'50%'}}> ${cartContext.totalAmount.toFixed(2)}</p>
            </>
          )}

          <style jsx>{`
            .cart-header {
              display: flex;
              align-items: center;
              justify-content: center;
              font-size:30px;
            }

            .side-box {
              display: flex;
              flex-direction: column;
              justify-content: flex-end;
              position: absolute;
              top: 30%;
              right:0%;
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
