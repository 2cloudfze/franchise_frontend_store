import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import MDButton from "@/components/MDButton";
import BodyDescTypography from "@/components/Typography/BodyDescTypography";
import MDBox from "@/components/MDBox";

export default function QtyComponent({ cartAddRemove, quantity }) {
  return (
    <MDBox display="flex" flexDirection="row">
      <MDButton size="Large">
        <RemoveIcon onClick={() => cartAddRemove("Remove")} />
      </MDButton>
      <BodyDescTypography fontSize={10} fontWeight={400}>
        {quantity}
      </BodyDescTypography>
      <MDButton size="Large">
        <AddIcon onClick={() => cartAddRemove("Add")} />
      </MDButton>
    </MDBox>
  );
}
