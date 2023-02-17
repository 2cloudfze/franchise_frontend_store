import React from "react";
import styled from "@emotion/styled";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Pay from "@/pages/checkout/pay"
import Checkbox from '@mui/material/Checkbox';
import DefaultLayout from "@/components/Layouts/DefaultLayout";

const Container = styled.div`
  background-color: white;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 20px;
  margin-right: 20px;
  background: linear-gradient(
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.7)
  ),
  
  background-size: cover;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 2px;
`

const Summary = styled.div`
  flex: 1;
  margin-bottom: 50px;
  margin-left: 700px;
  border: 0.5px solid #2A2A72;
  border-radius: 10px;
  padding: 20px;
  // height: 90vh;
  height: 50vh;
  width: 45%;
`

const SummaryTitle = styled.h1`
  font-weight: 200;
`

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`

const SummaryItemText = styled.span`
`

const SummaryItemPrice = styled.span``

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
  border-radius: 20px;
  &:hover{
    color: yellow;
  }

  
  margin-top: 20px;
`

function Checkout() {

  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <>
     <DefaultLayout>

      <Container>
        <Box sx={{ width: 500, maxWidth: "100%" }}>
          <div>
            <TextField
              label="First Name"
              id="outlined-start-adornment"
              sx={{ m: 1, width: "25ch" }}
            />

            <TextField
              label="Last Name"
              id="outlined-start-adornment"
              sx={{ m: 1, width: "25ch" }}
            />

            <TextField
              label="Company Name (Optional)"
              id="outlined-start-adornment"
              sx={{ m: 1, width: "65ch" }}
            />

            <TextField
              label="Country"
              id="outlined-start-adornment"
              sx={{ m: 1, width: "65ch" }}
            />

            <Checkbox
              checked={checked}
              onChange={handleChange}
              inputProps={{ 'aria-label': 'controlled' }}
            />

            <TextField
              label="Street Address"
              id="outlined-start-adornment"
              sx={{ m: 1, width: "65ch" }}
            />

            <TextField
              label="Shipping Address"
              id="outlined-start-adornment"
              sx={{ m: 1, width: "65ch" }}
            />

            <TextField
              label="Appartments, Suite, Unit etc..."
              id="outlined-start-adornment"
              sx={{ m: 1, width: "65ch" }}
            />

            <TextField
              label="Town / City"
              id="outlined-start-adornment"
              sx={{ m: 1, width: "25ch" }}
            />

            <TextField
              label="State / Country"
              id="outlined-start-adornment"
              sx={{ m: 1, width: "25ch" }}
            />

            <TextField
              label="Pincode / Zip"
              id="outlined-start-adornment"
              sx={{ m: 1, width: "25ch" }}
            />

            <TextField
              label="Phone"
              id="outlined-start-number"
              sx={{ m: 1, width: "25ch" }}
            />

            <TextField
              label="Email Address"
              id="outlined-start-adornment"
              sx={{ m: 1, width: "65ch" }}
            />

          </div>
        </Box>

        <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <Hr />
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 0</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 0.00</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -0.00</SummaryItemPrice>
            </SummaryItem>

            <Pay />
            
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 0</SummaryItemPrice>
            </SummaryItem>
            <Button>PLACE ORDER</Button>
          </Summary>

      </Container>

      </DefaultLayout>
    </>
  );
}

export default Checkout;
