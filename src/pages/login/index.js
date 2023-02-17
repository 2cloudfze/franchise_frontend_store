import React from "react";
import { useRouter } from "next/router";
import MDBox from "@/components/MDBox";
import FlexBox from "@/components/MDSpacer/MDSpacer";
import HeaderTypography from "@/components/Typography/HeaderTypography";
import ButtonTypography from "@/components/Typography/ButtonTYpography";

let style = {
  borderRadius: "5px",
  marginTop: "20px",
  height: "30px",
  border: "1px solid black",
  padding: "10px",
};

function Login() {
  const router = useRouter();
  return (
    <FlexBox display="flex" justifyContent="center" mt="300px">
      <MDBox border="1px solid black" p="30px" borderRadius="15px" width="30%">
        <MDBox fontSize="24px" fontWeight="300">
          SIGN IN
        </MDBox>
        <HeaderTypography display="flex" flexDirection="column">
          <MDBox borderRadius="5px">
            <input style={style} type="text" placeholder="username" />
          </MDBox>
          <MDBox>
            <input style={style} type="password" placeholder="password" />
          </MDBox>
          <ButtonTypography width="30%" marginTop="20px">
            LOGIN
          </ButtonTypography>
          <MDBox
            sx={{ cursor: "pointer" }}
            onClick={() => router.push("/register")}
          >
            CREATE A NEW ACCOUNT
          </MDBox>
          <MDBox
            mt="5px"
            sx={{ cursor: "pointer" }}
            onclick={() => router.push("/register")}
          >
            CONTINUE AS QUEST
          </MDBox>
        </HeaderTypography>
      </MDBox>
    </FlexBox>
  );
}

export default Login;
