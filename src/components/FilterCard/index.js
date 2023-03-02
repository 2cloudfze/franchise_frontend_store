import { useState, useContext } from "react";
import { useRouter } from "next/router";
import Divider from "@mui/material/Divider";
import MDBox from "@/components/MDBox";
import CancelIcon from "@mui/icons-material/Cancel";

import ConfiguratorRoot from "@/components/FilterCard/ConfiguratorRoot";
import FilterContext from "@/context/FilterContext/filter-context";
import {
  setOpenConfigurator,
  useMaterialUIController,
} from "@/context/MaterialContext";
import HeaderTypography from "../Typography/HeaderTypography";
import useQueryBuilder from "@/hook/use-query-builder";
import replaceAndSpace from "@/helper";
import RadioButton from "./components/RadioButton";

export default function FilterCard() {
  const router = useRouter();
  const filterContext = useContext(FilterContext);
  const filterItems = filterContext.filterItems;
  const [controller, dispatch] = useMaterialUIController();
  const { openConfigurator } = controller;
  const [selectedCategoriesValue, setSelectedCategoriesValue] = useState(
    filterItems.selectedCategory
  );
  const [selectedBrandValue, setSelectedBrandValue] = useState("All-Brands");

  const { head, queryString, next, updateQuery } = useQueryBuilder({
    query: `catname:${filterItems.selectedCategory} AND manname:*`,
    rowCount: 8,
  });
  const handleOptionSelect = (category, brand) => {
    const modifiedCategory = replaceAndSpace(category);
    const modifiedBrand = replaceAndSpace(brand);
    filterContext.updateSelectedCategory(category);
    const filterQuery = updateQuery(
      `catname:${modifiedCategory} AND manname:${modifiedBrand}`
    );
    router.push({
      pathname: "/products/" + head,
      query: {
        data: filterQuery + next(),
      },
    });
  };
  const handleCategoriesChange = (event) => {
    const newSelectedCategory = event.target.value;
    setSelectedCategoriesValue(newSelectedCategory);
    handleOptionSelect(newSelectedCategory, selectedBrandValue);
    setTimeout(() => {
      handleCloseConfigurator();
    }, 500);
  };
  const handleBrandChange = (event) => {
    const newSelectedBrand = event.target.value;
    setSelectedBrandValue(newSelectedBrand);
    handleOptionSelect(selectedCategoriesValue, newSelectedBrand);
    setTimeout(() => {
      handleCloseConfigurator();
    }, 500);
  };

  const handleCloseConfigurator = () => setOpenConfigurator(dispatch, false);
  return (
    <ConfiguratorRoot variant="permanent" ownerState={{ openConfigurator }}>
      <MDBox
        display="flex"
        justifyContent="space-between"
        alignItems="baseline"
        pt={4}
        pb={0.5}
        px={3}
      >
        <MDBox>
          <HeaderTypography fontSize="18px">Filter By</HeaderTypography>
        </MDBox>
        <CancelIcon fontSize="Medium" onClick={handleCloseConfigurator} />
      </MDBox>
      <Divider
        variant="middle"
        sx={{ height: 2, backgroundColor: "grey" }}
        role="presentation"
      />

      {filterItems.categories.length > 1 ? (
        <>
          <HeaderTypography>Categories</HeaderTypography>
          <Divider
            sx={{
              height: 2,
              backgroundColor: "grey",
              width: "50%",
              margin: "0px",
            }}
            variant="inset"
          />
          <MDBox>
            {filterItems.categories.map((element) => (
              <RadioButton
                label={element}
                selected={selectedCategoriesValue}
                handleSelected={handleCategoriesChange}
              />
            ))}
          </MDBox>
        </>
      ) : null}

      <HeaderTypography>Brand's</HeaderTypography>
      <Divider
        sx={{ height: 2, backgroundColor: "grey", width: "50%", margin: "0px" }}
        variant="inset"
      />

      <RadioButton
        label="All-Brands"
        selected={selectedBrandValue}
        handleSelected={handleBrandChange}
      />
      <MDBox>
        {filterItems.brands.map((element) => (
          <RadioButton
            label={element}
            selected={selectedBrandValue}
            handleSelected={handleBrandChange}
          />
        ))}
      </MDBox>
    </ConfiguratorRoot>
  );
}
