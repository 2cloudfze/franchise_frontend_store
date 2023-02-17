import { useState, useEffect } from "react";
import Divider from "@mui/material/Divider";
import MDBox from "@/components/MDBox";
import Icon from "@mui/material/Icon";

import ConfiguratorRoot from "@/components/FilterCard/ConfiguratorRoot";
import {
  setOpenConfigurator,
  useMaterialUIController,
} from "@/context/MaterialContext";
export default function FilterCard() {
  const [controller, dispatch] = useMaterialUIController();
  const { openConfigurator } = controller;

  const handleCloseConfigurator = () => setOpenConfigurator(dispatch, false);
  return (
    <ConfiguratorRoot variant="permanent" ownerState={{ openConfigurator }}>
      <MDBox
        display="flex"
        justifyContent="space-around"
        alignItems="baseline"
        pt={4}
        pb={0.5}
        px={3}
      >
        <MDBox>
          <p>Configure</p>
          <p color="text">Change the look and feel of the Dashboard.</p>
        </MDBox>
        <Icon onClick={handleCloseConfigurator}>close</Icon>
      </MDBox>
      <Divider sx={{ height: 4 }} />
    </ConfiguratorRoot>
  );
}
