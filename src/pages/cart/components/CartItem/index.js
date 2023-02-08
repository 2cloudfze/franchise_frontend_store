import * as React from "react";
import CartContext from "@/context/CartContext/cart-context";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { useState, useContext } from "react";
import TableRow from "@mui/material/TableRow";
import QtyComponent from "@/pages/cart/components/QtyComponent";
import DeleteIcon from '@mui/icons-material/Delete'

export default function CartItem({ cartItem }) {
  const cartContext = useContext(CartContext);

  const cartAddRemove = (action) => {
    if (action == "Add") {
      cartContext.addItem(cartItem);
    } else {
      cartContext.removeItem(cartItem.id);
    }
  };

  const styles = {
    // backgroundColor: 'red',
    color: "white",
    padding: "16px",
    maxWidth:"120px",
    maxHeight:"60px"
  };
  return (
    <>
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
          <QtyComponent cartAddRemove={cartAddRemove} quantity={cartItem.qty} />
        </TableCell>
        <TableCell>{cartItem.total}</TableCell>
        
        <DeleteIcon sx={{color:"red",marginTop:"49px"}} />
      

      </TableRow>
    </TableBody>
    
    </>
  );
}
