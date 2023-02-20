import { useContext } from "react";
import CartContext from "@/context/CartContext/cart-context";
import DataTable from "@/components/DataTable";
import data from "./data";
import { Card } from "@mui/material";
export default function CartTable() {
  const cartContext = useContext(CartContext);
  const { columns, rows } = data(cartContext.items, cartContext);
  return (
    <Card>
      <DataTable
        table={{ columns, rows }}
        isSorted={false}
        entriesPerPage={false}
        showTotalEntries={true}
        pagination
      />
    </Card>
  );
}
