import ImageContainer from "@/components/ImageContainer";
import BodyDescTypography from "@/components/Typography/BodyDescTypography";
import QtyComponent from "../../QtyComponent";
import DeleteIcon from "@mui/icons-material/Delete";
import MDBox from "@/components/MDBox";
const data = (cartItems, cartContext) => {
  return {
    columns: [
      {
        Header: "",
        accessor: "image",
        width: "10%",
        align: "center",
      },
      {
        Header: "Product",
        accessor: "product",
        width: "20%",
        align: "center",
      },
      {
        Header: "Price",
        accessor: "price",
        width: "10%",
        align: "center",
      },
      {
        Header: "Quantity",
        accessor: "qty",
        width: "10%",
        align: "center",
      },

      {
        Header: "Total",
        accessor: "total",
        width: "10%",
        align: "center",
      },
      {
        Header: "",
        accessor: "remove",
        width: "10%",
        align: "center",
      },
    ],
    rows: cartItems.map((item) => {
      const cartAddRemove = (action) => {
        if (action == "Add") {
          cartContext.addItem(item);
        } else {
          cartContext.removeItem(item.id, false);
        }
      };
      return {
        image: <ImageContainer width={200} imageUrl={item.img_url} />,
        product: <BodyDescTypography>{item.name}</BodyDescTypography>,
        price: <BodyDescTypography>${item.price}</BodyDescTypography>,
        qty: <QtyComponent cartAddRemove={cartAddRemove} quantity={item.qty} />,
        total: <BodyDescTypography>${item.total}</BodyDescTypography>,
        remove: (
          <MDBox
            display="flex"
            justifyContent="center"
            onClick={() => cartContext.removeItem(item.id, true)}
          >
            <DeleteIcon fontSize="medium" sx={{ cursor: "pointer" }} />
          </MDBox>
        ),
      };
    }),
  };
};

export default data;
