import CartProvider from "@/context/CartContext/CartProvider";
import FilterProvider from "@/context/FilterContext/FilterProvider";
import PaginationProvider from "@/context/PaginationContext/PaginationProvider";
// import "../styles/globals.css";
import "../styles/font.css";
export default function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <PaginationProvider>
        <FilterProvider>
          <Component {...pageProps} />
        </FilterProvider>
      </PaginationProvider>
    </CartProvider>
  );
}
