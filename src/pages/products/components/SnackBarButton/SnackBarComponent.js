import { useSnackbar } from "notistack";
import ButtonTypography from "@/components/Typography/ButtonTYpography";

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
        Add Cart
      </ButtonTypography>
      {/* <style jsx>{`
        .add-cart {
          width: 30%;
          border: none;
          margin-top: 5px;
          padding: 15px 20px;
          background-color: lightblue;
          border-radius: 20px;
          color: white;
          cursor: pointer;
        }
        .add-cart:focus {
          outline: none;
        }
      `}</style> */}
    </>
  );
}
