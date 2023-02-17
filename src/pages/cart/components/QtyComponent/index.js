import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import ButtonTypography from "@/components/Typography/ButtonTYpography";
import MDBox from "@/components/MDBox";
export default function QtyComponent({ cartAddRemove, quantity }) {
  return (
    <>
      <ButtonTypography borderRadius="40px">
        <RemoveIcon  onClick={() => cartAddRemove("Remove")} />
      </ButtonTypography>
     {quantity}
       <ButtonTypography borderRadius="30px">
        <AddIcon onClick={() => cartAddRemove("Add")} />
      </ButtonTypography>
    </>
  );
}
