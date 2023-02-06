import CartProvider from "@/context/CartContext/CartProvider";
import PaginationProvider from "@/context/PaginationContext/PaginationProvider";
export default function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <PaginationProvider>
        <Component {...pageProps} />
      </PaginationProvider>
    </CartProvider>
  );
}
