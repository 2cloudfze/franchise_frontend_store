import { useSnackbar } from "notistack";
export default function SnackBarComponent({ item, cartContext }) {
  const { enqueueSnackbar } = useSnackbar();

  const handleClickVariant = ({ variant }) => {
    cartContext.addItem({ ...item, qty: 1, total: item.price * 1 });
    enqueueSnackbar("ADD TO CART SUCCESSFULLY", { variant });
  };

  return (
    <>
      <button
        className="add-cart"
        onClick={() => handleClickVariant("success")}
      >
        Add Cart
      </button>
      <style jsx>{`
        .price .add-cart {
          width: 100%;
          border: none;
          margin-top: 105px;
          margin-left: -40px;
          padding: 15px 20px;
          background: linear-gradient(195deg, #1260a3, #1a73e8, #36c7c7);
          border-radius: 20px;
          color: white;
          cursor: pointer;
        }
        .price .add-cart:focus {
          outline: none;
        }
      `}</style>
    </>
  );
}
