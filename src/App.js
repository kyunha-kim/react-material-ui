import styled from "@emotion/styled";
import { Accessibility, AcUnit } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import "./App.css";

function App() {
  return (
    <div>
      <Button variant="text">Text</Button>
      <Button startIcon={<AcUnit />} fullWidth size="large" variant="contained">
        Contained
      </Button>
      <Button endIcon={<Accessibility />} variant="outlined">
        Outlined
      </Button>
      <Button
        sx={{
          backgroundColor: "gray",
          color: "#fff",
          margin: "10px",
          "&:hover": {
            backgroundColor: "#000",
          },
          "&:disabled": {
            backgroundColor: "#fff",
            color: "#000",
          },
        }}
      >
        Custom Style
      </Button>
      <CustomButton>CustomButton</CustomButton>

      <Typography variant="h1" gutterBottom>
        h1. Heading
      </Typography>
    </div>
  );
}

const CustomButton = styled(Button)({
  backgroundColor: "gray",
  color: "#fff",
  margin: "10px",
  "&:hover": {
    backgroundColor: "#000",
  },
  "&:disabled": {
    backgroundColor: "#fff",
    color: "#000",
  },
});

export default App;
