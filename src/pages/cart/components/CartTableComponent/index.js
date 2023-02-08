import CartItem from "@/pages/cart/components/CartItem";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import Paper from "@mui/material/Paper";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
export default function CartTableComponent({ cartContext }) {
  return (
    <TableContainer component={Paper} elevation={0}>
      <Table
        sx={{
          [`& .${tableCellClasses.root}`]: {
            borderBottom: "none",
          },
        }}
      >
        <TableHead>
          <TableRow>
            <div></div>
            <TableCell>Products</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Total</TableCell>
          </TableRow>
        </TableHead>
        {cartContext.items.map((element, index) => (
          <CartItem key={index} cartItem={element} />
        ))}
      </Table>
    </TableContainer>
  );
}
