import * as React from "react";
import { FaShoppingCart, FaUser, FaSignOutAlt } from "react-icons/fa";
import CartContext from "@/context/CartContext/cart-context";
import { useContext } from "react";
import Logo from "@/components/Logo";
import SearchBox from "@/components/SearchBox";
import { useRouter } from "next/router";

import HeaderTypography from "../Typography/HeaderTypography";
import MDBox from "@/components/MDBox";
import HeaderCategories from "../HeaderCategories";

let style = {
  position: "fixed",
  top: "0",
  zIndex: "10",
  justifyContent: "center",
  alignItem: "center",
  display: "flex",
  flexDirection: "row",
  paddingTop: 3,
  width: "100vw",
};
export default function HeaderDesktop({ viewer }) {
  const router = useRouter();
  const cartContext = useContext(CartContext);
  const cartQty = cartContext.items.length;
  return (
    <MDBox pt={12}>
      <MDBox
        bgColor="linear-gradient(195deg, #1260a3, #1a73e8, #36c7c7)"
        sx={{ ...style }}
      >
        <MDBox onClick={() => router.push("/")}>
          <Logo />
        </MDBox>
        <MDBox pt={1}>
          <SearchBox />
        </MDBox>

        <MDBox
          sx={{
            justifyContent: "center",
            alignItem: "center",
            display: "flex",
            flexDirection: "row",
            paddingTop: 3,
            paddingLeft: 3,
            
          }}
        >
          <MDBox color="white" onClick={() => router.push("/cart")}>
            <FaShoppingCart mr="20px" />

            {cartQty}
          </MDBox>
          {!viewer && (
            <MDBox color="white" onClick={() => router.push("/login")}>
              <FaUser />
            </MDBox>
          )}
          {viewer && (
            <>
              <MDBox
                marginLeft="25px"
                color="white"
                onClick={() => router.push("/login")}
              >
                <FaUser />
                <HeaderTypography>{viewer.name}</HeaderTypography>
              </MDBox>
              <MDBox
                marginLeft="25px"
                color="white"
                onClick={() => router.push("/signout")}
              >
                <FaSignOutAlt />
              </MDBox>
              <MDBox marginLeft="25px" onClick={() => router.push("/shipping")}>
                <HeaderTypography color="white">Address</HeaderTypography>
              </MDBox>
              <MDBox
                marginLeft="25px"
                onClick={() => router.push("/my_orders")}
              >
                <HeaderTypography color="white"> orders </HeaderTypography>
              </MDBox>
            </>
          )}
        </MDBox>
      </MDBox>
      <HeaderCategories />
    </MDBox>
  );
}
