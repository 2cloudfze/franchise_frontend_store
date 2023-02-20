import { forwardRef } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Custom styles for MDInput
import MDInputRoot from "@/components/MDInput/MDInputRoot";
import MDTypography from "@/components/MDTypography";

const MDInput = forwardRef(
  ({ error, success, disabled, message, ...rest }, ref) => (
    <>
      <MDInputRoot
        {...rest}
        ref={ref}
        ownerState={{ error, success, disabled }}
      />
      {error && (
        <MDTypography
          variant="p"
          sx={{ fontSize: 12 }}
          fontWeight="light"
          color="error"
          mt={1}
        >
          {message}
        </MDTypography>
      )}
    </>
  )
);

// Setting default values for the props of MDInput
MDInput.defaultProps = {
  error: false,
  success: false,
  disabled: false,
  message: "",
};

// Typechecking props for the MDInput
MDInput.propTypes = {
  error: PropTypes.bool,
  success: PropTypes.bool,
  disabled: PropTypes.bool,
  message: PropTypes.string,
};

export default MDInput;
