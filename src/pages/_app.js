import CartProvider from "@/context/CartContext/CartProvider";
export default function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <Component {...pageProps} />{" "}
    </CartProvider>
  );
}
