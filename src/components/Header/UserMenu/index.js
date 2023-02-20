import React, { useState } from "react";
import { FaUser, FaSignOutAlt } from "react-icons/fa";
import MDBox from "@/components/MDBox";
import { Card } from "@mui/material";
import HeaderTypography from "@/components/Typography/HeaderTypography";
import { useRouter } from "next/router";
const UserMenu = () => {
  const router = useRouter();
  const [showSubIcons, setShowSubIcons] = useState(false);

  const handleIconClick = () => {
    setShowSubIcons(!showSubIcons);
  };

  return (
    <MDBox>
      <MDBox
        onClick={handleIconClick}
        color="white"
        style={{ cursor: "pointer" }}
      >
        <FaUser />
      </MDBox>

      {showSubIcons && (
        <Card
          style={{
            backgroundColor: "white",
            position: "absolute",
            marginTop: "10px",
            width: "100px",
            Padding: "5px",
            alignItems: "center",
            paddingTop:"10px",
            paddingBottom:"10px"
          }}
        >
          <MDBox onClick={() => router.push("/shipping")}>
            <HeaderTypography >Address</HeaderTypography>
          </MDBox>
          <MDBox onClick={() => router.push("/my_orders")}>
            <HeaderTypography > orders </HeaderTypography>
          </MDBox>
          <MDBox
            
            style={{ cursor: "pointer" }}
            onClick={() => router.push("/signout")}
          >
            <FaSignOutAlt />
          </MDBox>
        </Card>
      )}
    </MDBox>
  );
};

export default UserMenu;
