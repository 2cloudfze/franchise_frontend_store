import { useContext, useState } from "react";
import Logo from "@/components/Logo";
import MDBox from "@/components/MDBox";
import HeaderCategories from "@/components/HeaderCategories";
import SearchBox from "@/components/SearchBox";
import { useRouter } from "next/router";
import CartContext from "@/context/CartContext/cart-context";
import { Badge, IconButton, Menu, MenuItem } from "@mui/material";
import { ShoppingCart, AccountCircle } from "@mui/icons-material";
import HeaderTypography from "../Typography/HeaderTypography";

let style = {
  position: "fixed",
  top: "0",
  zIndex: "10",
  width: "100vw",
};
let fontSize = "12px";
export default function HeaderDesktop() {
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(false);
  const cartContext = useContext(CartContext);

  const handleOpenMenu = (event) => setOpenMenu(event.currentTarget);
  const handleCloseMenu = () => setOpenMenu(false);

  const renderMenu = () => (
    <Menu
      anchorEl={openMenu}
      anchorReference={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      open={Boolean(openMenu)}
      onClose={handleCloseMenu}
      sx={{ mt: 2 }}
    >
      <MDBox flexDirection="column">
        <MenuItem>
          <HeaderTypography
            onClick={() => router.push("/shipping")}
            fontSize={fontSize}
          >
            ADDRESS
          </HeaderTypography>
        </MenuItem>
        <MenuItem>
          <HeaderTypography
            onClick={() => router.push("/my_orders")}
            fontSize={fontSize}
          >
            ORDERS
          </HeaderTypography>
        </MenuItem>
        <MenuItem>
          <HeaderTypography
            onClick={() => router.push("/login")}
            fontSize={fontSize}
          >
            LOGOUT/LOGIN
          </HeaderTypography>
        </MenuItem>
      </MDBox>
    </Menu>
  );
  return (
    <MDBox sx={{ ...style }}>
      <MDBox
        bgColor="linear-gradient(195deg, #1260a3, #1a73e8, #36c7c7)"
        display="flex"
        flexDirection="row"
        justifyContent="space-around"
        alignItems="center"
      >
        <MDBox p={2}>
          <Logo />
        </MDBox>
        <MDBox p={2}>
          <SearchBox />
        </MDBox>
        <MDBox
          p={2}
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
        >
          <MDBox p={1}>
            <IconButton aria-label="cart" onClick={() => router.push("/cart")}>
              <Badge badgeContent={cartContext.items.length} color="white">
                <ShoppingCart color="white" />
              </Badge>
            </IconButton>
          </MDBox>
          <MDBox p={1}>
            <IconButton aria-label="login" onClick={handleOpenMenu}>
              <AccountCircle color="white" />
            </IconButton>
            {renderMenu()}
          </MDBox>
        </MDBox>
      </MDBox>
      <HeaderCategories />
    </MDBox>
  );
}
