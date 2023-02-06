import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import Button from "@mui/material/Button";
export default function PaginationContainer({ buttonHandler }) {
  return (
    <div style={{ paddingTop: "50px" }}>
      <Button
        className="previous"
        variant="contained"
        startIcon={<ArrowLeftOutlined />}
        onClick={() => buttonHandler("previous")}
        style={{ marginRight: "30px", marginLeft: "500px" }}
      >
        Previous
      </Button>
      <Button
        variant="contained"
        endIcon={<ArrowRightOutlined />}
        onClick={() => buttonHandler("next")}
      >
        Next
      </Button>
    </div>
  );
}
