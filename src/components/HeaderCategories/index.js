import { useState } from "react";
import offlineCategories from "@/db/offlineData/categories";
import MDBox from "@/components/MDBox";
import HeaderTypography from "../Typography/HeaderTypography";
import { Card, Menu } from "@mui/material";
import MenuItemBuilder from "./MenuBuilder";

export default function HeaderCategories() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event, index) => {
    setHoveredIndex(index);
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setHoveredIndex(null);
    setAnchorEl(null);
  };

  return (
    <Card>
      <MDBox p={1} display="flex" flexDirection="row" justifyContent="center">
        {offlineCategories.map((element, index) => (
          <MDBox
            p={1}
            key={index}
            onMouseEnter={(event) => handleMenuOpen(event, index)}
          >
            <HeaderTypography
              color={hoveredIndex === index ? "#918A8A" : "black"}
            >
              {element.head}
            </HeaderTypography>
            <Menu
              anchorEl={anchorEl}
              open={hoveredIndex === index}
              onClose={handleMenuClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
              transformOrigin={{ vertical: "top", horizontal: "center" }}
              getContentAnchorEl={null}
              disableScrollLock
            >
              <MDBox onMouseLeave={handleMenuClose}>
                {element.categories.map((subCategory, subIndex) => (
                  <MenuItemBuilder
                    subCategory={subCategory}
                    subIndex={subIndex}
                    handleMenuClose={handleMenuClose}
                  />
                ))}
              </MDBox>
            </Menu>
          </MDBox>
        ))}
      </MDBox>
    </Card>
  );
}
