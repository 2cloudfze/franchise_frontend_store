import { useState, useEffect } from "react";
import offlineCategories from "@/db/offlineData/categories";
import MDBox from "@/components/MDBox";
import HeaderTypography from "../Typography/HeaderTypography";
import { Card, Menu } from "@mui/material";
import MenuItemBuilder from "./MenuBuilder";

export default function HeaderCategories() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuDistance, setMenuDistance] = useState(null);

  const handleMenuOpen = (event, index) => {
    setHoveredIndex(index);
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setHoveredIndex(null);
    setAnchorEl(null);
  };

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (anchorEl) {
        const rect = anchorEl.getBoundingClientRect();
        const distance = Math.sqrt(
          Math.pow(rect.x + rect.width / 2 - event.clientX, 2)
          // Math.pow(rect.y + rect.height / 2 - event.clientY, 2)
        );
        if (distance > 150) {
          handleMenuClose();
        } else {
          setMenuDistance(distance);
        }
      }
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [anchorEl]);

  return (
    <Card>
      <MDBox p={1} display="flex" flexDirection="row" justifyContent="center">
        {offlineCategories.map((element, index) => (
          <MDBox
            p={1}
            key={index}
            onMouseEnter={(event) => handleMenuOpen(event, index)}
            onMouseLeave={handleMenuClose}
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
              TransitionProps={{ timeout: { enter: 400, exit: 20 } }}
              disableScrollLock
            >
              <MDBox onMouseLeave={handleMenuClose}>
                {element.subCategories.map((subCategory, subIndex) => (
                  <MenuItemBuilder
                    key={subIndex}
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
