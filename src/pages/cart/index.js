import DefaultLayout from "@/components/Layouts/DefaultLayout";
import CartContext from "@/context/CartContext/cart-context";
import { useContext } from "react";
import CartTableComponent from "@/pages/cart/components/CartTableComponent";

function Cart() {
  const cartContext = useContext(CartContext);

  return (
    <DefaultLayout>
      <CartTableComponent cartContext={cartContext} />
    </DefaultLayout>
  );
}

export default Cart;
