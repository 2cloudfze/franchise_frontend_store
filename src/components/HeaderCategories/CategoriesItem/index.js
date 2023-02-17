import React, { useState } from "react";
import Item from "./components";
import HeaderTypography from "@/components/Typography/HeaderTypography";
import MDBox from "@/components/MDBox";

export default function CategoriesItem({ categoryData }) {
  const [showSubCategories, setShowSubCategories] = useState(false);

  return (
    <MDBox
      onMouseEnter={() => setShowSubCategories(true)}
      onMouseLeave={() => setShowSubCategories(false)}
    >
      <HeaderTypography>
        <MDBox sx={{ backgroundColor: "#fafafa" }} key={categoryData.id}>
          <MDBox
            sx={{
              "&:hover": {
                color: "#918a8a",
              },
            }}
          >
            {categoryData.head.toUpperCase()}
          </MDBox>

          {showSubCategories && (
            <MDBox sx={{ width: "auto", "z-index": 1 }}>
              {categoryData.categories.map((sub) => (
                <Item
                  key={sub.id}
                  id={sub.id}
                  name={sub.displayname}
                  category={sub.category}
                />
              ))}
            </MDBox>
          )}
        </MDBox>
      </HeaderTypography>
    </MDBox>
  );
}
