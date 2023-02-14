import React from "react";
import { Box, useTheme } from "@mui/material";

const Spacer = ({ x, y, basis, ...restProps }) => {
  const theme = useTheme();
  return (
    <Box
      data-testid="Spacer"
      width={x ? theme.spacing(x) : 10}
      height={y ? theme.spacing(y) : 10}
      flexBasis={basis ? theme.spacing(basis) : 10}
      flexGrow={0}
      flexShrink={0}
      {...restProps}
    />
  );
};

export default Spacer;
