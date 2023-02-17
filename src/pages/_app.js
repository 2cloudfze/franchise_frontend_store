import CartProvider from "@/context/CartContext/CartProvider";
import FilterProvider from "@/context/FilterContext/FilterProvider";
import PaginationProvider from "@/context/PaginationContext/PaginationProvider";
import theme from "#/assets/theme";
import { ThemeProvider } from "@mui/material/styles";
import { MaterialUIControllerProvider } from "@/context/MaterialContext";
// import "../styles/globals.css";
import "../styles/font.css";
export default function App({ Component, pageProps }) {
  return (
    <MaterialUIControllerProvider>
      <ThemeProvider theme={theme}>
        <CartProvider>
          <PaginationProvider>
            <FilterProvider>
              <Component {...pageProps} />
            </FilterProvider>
          </PaginationProvider>
        </CartProvider>
      </ThemeProvider>
    </MaterialUIControllerProvider>
  );
}
