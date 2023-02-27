import { useState } from "react";
import { useRouter } from "next/router";
import Divider from "@mui/material/Divider";
import MDBox from "@/components/MDBox";
import CancelIcon from "@mui/icons-material/Cancel";
import { Checkbox } from "@mui/material";
import ConfiguratorRoot from "@/components/FilterCard/ConfiguratorRoot";
import {
  setOpenConfigurator,
  useMaterialUIController,
} from "@/context/MaterialContext";
import HeaderTypography from "../Typography/HeaderTypography";
import BodyDescTypography from "../Typography/BodyDescTypography";
import useQueryBuilder from "@/hook/use-query-builder";

const initStateCheckbox = (length) => Array(length).fill(false);
const findTrueIndex = (list) => list.findIndex((item) => item);

export default function FilterCard({ filterOptions }) {
  const [controller, dispatch] = useMaterialUIController();
  const { openConfigurator } = controller;
  const router = useRouter();

  const { head, queryString, next, updateQuery } = useQueryBuilder({
    query: `catname:${filterOptions.selectedCategory} AND manname:*`,
    rowCount: 8,
  });
  const [checkedState, setCheckedState] = useState(
    initStateCheckbox(filterOptions.brands.length)
  );

  const handleFilterSelect = (checkedState) => {
    const selectedFilterIndex = findTrueIndex(checkedState);
    if (selectedFilterIndex != -1) {
      const filterQuery = `catname:${filterOptions.selectedCategory} AND manname:${filterOptions.brands[selectedFilterIndex]}`;
      router.push({
        pathname: "/products/" + head,
        query: {
          data: `${updateQuery(filterQuery)}${next()}`,
        },
      });
    } else {
      router.push({
        pathname: "/products/" + head,
        query: {
          data: `${queryString}*${next()}`,
        },
      });
    }
  };

  const handleChange = (index) => (event) => {
    const newCheckedState = initStateCheckbox(filterOptions.brands.length);
    newCheckedState[index] = event.target.checked;
    setCheckedState(newCheckedState);
    handleFilterSelect(newCheckedState);
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

      {filterOptions.categories.categories.length > 1 ? (
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
            {filterOptions.categories.categories.map((element, index) => (
              <MDBox
                display="flex"
                flexDirection="row"
                justifyContent="flex-start"
                alignItems="center"
              >
                <MDBox>
                  <Checkbox
                    sx={{
                      "& .MuiSvgIcon-root": {
                        fontSize: 24,
                        border: "2px solid grey",
                      },
                    }}
                    checked={checkedState[index]}
                    onChange={handleChange(index)}
                    inputProps={{ "aria-label": `primary checkbox-${index}` }}
                  />
                </MDBox>
                <BodyDescTypography fontWeight="400">
                  {element}
                </BodyDescTypography>
              </MDBox>
            ))}
          </MDBox>
        </>
      ) : null}

      <HeaderTypography>Brand's</HeaderTypography>
      <Divider
        sx={{ height: 2, backgroundColor: "grey", width: "50%", margin: "0px" }}
        variant="inset"
      />

      <MDBox>
        {filterOptions.brands.brands.map((element, index) => (
          <MDBox
            display="flex"
            flexDirection="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <MDBox>
              <Checkbox
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: 24,
                    border: "2px solid grey",
                  },
                }}
                checked={checkedState[index]}
                onChange={handleChange(index)}
                inputProps={{ "aria-label": `primary checkbox-${index}` }}
              />
            </MDBox>
            <BodyDescTypography fontWeight="400">{element}</BodyDescTypography>
          </MDBox>
        ))}
      </MDBox>
    </ConfiguratorRoot>
  );
}
