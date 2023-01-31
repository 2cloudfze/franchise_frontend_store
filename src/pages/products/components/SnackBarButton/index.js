import { SnackbarProvider } from "notistack";
import SnackBarComponent from "@/pages/products/components/SnackBarButton/SnackBarComponent";
export default function ButtonProvider({ item, cartContext }) {
  return (
    <SnackbarProvider maxSnack={3}>
      <SnackBarComponent item={item} cartContext={cartContext} />
    </SnackbarProvider>
  );
}
