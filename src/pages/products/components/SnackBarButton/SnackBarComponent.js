import { useSnackbar } from "notistack";
export default function SnackBarComponent({ item, cartContext }) {
  const { enqueueSnackbar } = useSnackbar();

  const handleClickVariant = () => {
    cartContext.addItem({ ...item, qty: 1, total: item.price * 1 });
    enqueueSnackbar("ADD TO CART SUCCESSFULLY", { variant:'success',anchorOrigin: { vertical: 'bottom', horizontal: 'center' } });
  };

  return (
    <>
      <button
        className="add-cart"
        onClick={ handleClickVariant}
      >
        Add Cart
      </button>
      <style jsx>{`
         .add-cart {
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
         .add-cart:focus {
          outline: none;
         }
     `}</style>
    </>
  );
}
