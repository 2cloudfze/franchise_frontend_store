import { Radio, RadioGroup, FormControlLabel } from "@mui/material";
import MDBox from "@/components/MDBox";
export default function RadioButton({ selected, handleSelected, label }) {
  return (
    <MDBox
      display="flex"
      flexDirection="row"
      justifyContent="flex-start"
      alignItems="center"
    >
      <MDBox>
        <RadioGroup
          sx={{ borderRadius: "50%" }}
          value={selected}
          onChange={handleSelected}
          color="primary"
        >
          <FormControlLabel
            value={label}
            control={<Radio />}
            label={
              <span
                style={{
                  marginLeft: 10,
                  fontFamily: "Montserrat",
                  fontSize: 15,
                  fontWeight: 500,
                }}
              >
                {label}
              </span>
            }
          />
        </RadioGroup>
      </MDBox>
    </MDBox>
  );
}
