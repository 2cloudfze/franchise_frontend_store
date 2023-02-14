import React from "react";
import Box from "@mui/material/Box";
import Spacer from "./Spacer";

const FlexBox = ({
  flexDirection = "row",
  flexShrink = 0,
  flexGrow = 0,
  flexBasis = "auto",
  spacing = 0,
  justifyContent = "flex-start",
  alignItems = "stretch",
  flexWrap = "nowrap",
  children,
  ...boxProps
}) => {
  const childrenArr = React.useMemo(() => {
    return React.Children.toArray(children).filter((child) => {
      // Filter out "null" children
      if (!child) {
        return false;
      }

      return true;
    });
  }, [children]);

  const spacerProps = React.useMemo(() => {
    const x = ["row", "row-reverse"].includes(flexDirection) ? spacing : 1;
    const y = ["column", "column-reverse"].includes(flexDirection)
      ? spacing
      : 1;
    return { x, y };
  }, [flexDirection, spacing]);

  return (
    <Box
      display="flex"
      flexDirection={flexDirection}
      flexShrink={flexShrink}
      flexGrow={flexGrow}
      flexBasis={flexBasis}
      flexWrap={flexWrap}
      justifyContent={justifyContent}
      alignItems={alignItems}
      {...boxProps}
    >
      {childrenArr.map((child, idx, arr) => {
        return (
          <React.Fragment key={idx}>
            {child}
            {spacing > 0 && idx < arr.length - 1 && <Spacer {...spacerProps} />}
          </React.Fragment>
        );
      })}
    </Box>
  );
};

export default FlexBox;
