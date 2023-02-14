import MDBox from "@/components/MDBox";
import FlexBox from "@/components/MDSpacer/MDSpacer";
import ButtonTypography from "@/components/Typography/ButtonTYpography";

export default function PaginationContainer({ buttonHandler }) {
  return (
    <MDBox display="flex" flexDirection="row" justifyContent="center">
      <MDBox p={2}>
        <ButtonTypography onClick={() => buttonHandler("previous")}>
          Previous
        </ButtonTypography>
      </MDBox>
      <MDBox p={2}>
        <ButtonTypography width="100px" onClick={() => buttonHandler("next")}>
          Next
        </ButtonTypography>
      </MDBox>
    </MDBox>
  );
}
