import * as React from "react";
import CartContext from "@/context/CartContext/cart-context";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { useState, useContext } from "react";
import TableRow from "@mui/material/TableRow";
import QtyComponent from "@/pages/cart/components/QtyComponent";
import { height } from "@mui/system";

export default function CartItem({ cartItem }) {
  const cartContext = useContext(CartContext);
  const [qty, setQty] = useState(cartItem.qty);

  const cartAddRemove = (action) => {
    if (action == "Add") {
      setQty(qty + 1);
      cartContext.addItem(cartItem);
    } else {
      setQty(qty - 1);
      cartContext.removeItem(cartItem.id);
    }
  };

  const styles = {
    // backgroundColor: 'red',
    color: 'white',
    padding: '16px',
    width:'160px'
  };
  return (
  
    <TableBody>
      <TableRow
        key={cartItem.id}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
 
        <TableCell>
          <img style={styles} src={cartItem.img_url} alt="Not found" />
        </TableCell>
        <TableCell component="th" scope="cartItem">
          {cartItem.name}
        </TableCell>
        <TableCell>{cartItem.price}</TableCell>
        <TableCell>
          <QtyComponent cartAddRemove={cartAddRemove} quantity={qty} />
        </TableCell>
        <TableCell>{cartItem.total}</TableCell>
      </TableRow>
    </TableBody>
    
  );
}
