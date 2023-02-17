import CartItem from "@/pages/cart/components/CartItem";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import Paper from "@mui/material/Paper";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import MDBox from "@/components/MDBox";
import SubHeaderTypography from "@/components/Typography/SubHeaderTypography";

export default function CartTableComponent({ cartContext }) {
  return (
    <TableContainer component={Paper} elevation={0}>
      <Table
        sx={{
          [`& .${tableCellClasses.root}`]: {
            borderBottom: "none",

            width: "800px",
          },
        }}
      >
        <MDBox
          style={{
            height: "420px",
            overflowY: "scroll",
            width: "960px",
            marginTop: "50px",
            marginLeft: "170px",
            marginBottom: "100px",
            borderTop: "1px solid #a2a3a3",
            borderBottom: "1px solid #a2a3a3",
            borderLeft: "none",
            borderRight: "none",
          }}
        >
          <TableHead
            style={{ position: "sticky", top: 0, background: "#f2f0f0" }}
          >
            <TableRow>
            
              <TableCell></TableCell>
              <TableCell>Products</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Total</TableCell>
              <TableCell></TableCell>
              
            </TableRow>
          </TableHead>
          <SubHeaderTypography>
          {cartContext.items.map((element, index) => (
            <CartItem key={index} cartItem={element} />
          ))}
          </SubHeaderTypography>  
        </MDBox>
      </Table>
    </TableContainer>
  );
}
