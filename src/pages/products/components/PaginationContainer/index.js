import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import Button from "@mui/material/Button";
export default function PaginationContainer({}) {
  return (
    <div style={{  paddingTop:'50px' }} >
      <Button className="previous"
        variant="contained"
        startIcon={<ArrowLeftOutlined />}
        onclick={() => console.log("previois")}
        style={{ marginRight: '480px',marginLeft: '270px' }}
      >
        Previous
      </Button>
      <Button
        variant="contained"
        endIcon={<ArrowRightOutlined />}
        onclick={() => console.log("next")}
      >
        Next
      </Button>
    </div>
  );
}
