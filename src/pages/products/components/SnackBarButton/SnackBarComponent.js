import { useSnackbar } from "notistack";
import ButtonTypography from "@/components/Typography/ButtonTYpography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function SnackBarComponent({ item, cartContext }) {
  const { enqueueSnackbar } = useSnackbar();
  const handleClickVariant = () => {
    cartContext.addItem({ ...item, qty: 1, total: item.price * 1 });
    enqueueSnackbar("ADD TO CART SUCCESSFULLY", {
      variant: "success",
      anchorOrigin: { vertical: "bottom", horizontal: "center" },
    });
  };

  return (
    <>
      <ButtonTypography
        backgroundColor="#238fdd"
        color="white"
        onClick={handleClickVariant}
      >
        <ShoppingCartIcon fontSize="Medium" />
      </ButtonTypography>
    </>
  );
}
