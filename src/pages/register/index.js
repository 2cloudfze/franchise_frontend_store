import React from "react";
import MDBox from "@/components/MDBox";
import FlexBox from "@/components/MDSpacer/MDSpacer";
import HeaderTypography from "@/components/Typography/HeaderTypography";
import ButtonTypography from "@/components/Typography/ButtonTYpography";

let style = {
  borderRadius: "5px",
  marginTop: "20px",
  height: "30px",
  border: "1px solid black",
  padding:"10px"
};
function Register() {
  return (
    <FlexBox display="flex" justifyContent="center" mt="160px">
      <MDBox border="1px solid black" p="30px" borderRadius="15px" width="30%">
        <MDBox fontSize="24px" fontWeight="300">
          CREATE AN ACCOUNT
        </MDBox>
        <MDBox borderRadius="5px">
          <input style={style} type="text" placeholder="username" />
        </MDBox>
        <MDBox>
          <input style={style} type="text" placeholder="Last Name" />
        </MDBox>
        <MDBox>
          <input style={style} type="text" placeholder="Username" />
        </MDBox>
        <MDBox>
          <input style={style} type="email" placeholder="Email" />
        </MDBox>
        <MDBox>
          <input style={style} type="Password" placeholder="Password" />
        </MDBox>
        <MDBox>
          <input style={style} type="Password" placeholder="Confirm Password" />
        </MDBox>
        <HeaderTypography marginTop="20px" >
          I acknowledge that I have read and agreed to the TERMS & CONDITIONS &
          PRIVACY POLICY.
        </HeaderTypography>
        <ButtonTypography width="30%" marginTop="20px">
        CREATE
        </ButtonTypography>
      </MDBox>
    </FlexBox>
  );
}

export default Register;
