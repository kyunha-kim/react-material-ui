import styled from "@emotion/styled";
import { Accessibility, AcUnit } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import { blue, green, red } from "@mui/material/colors";
import React from "react";

const test = () => {
  return (
    <div>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Box
          flex={1}
          p={1}
          sx={{
            width: 300,
            height: 300,
            backgroundColor: "primary.main",
            "&:hover": {
              backgroundColor: "secondary.main",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        />
        <Box
          flex={3}
          p={2}
          sx={{
            width: 300,
            height: 300,
            backgroundColor: "primary.main",
            "&:hover": {
              backgroundColor: "secondary.main",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        />
        <Box
          flex={2}
          p={4}
          sx={{
            width: 300,
            height: 300,
            backgroundColor: "primary.main",
            "&:hover": {
              backgroundColor: "secondary.main",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        />
      </Stack>

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

      <Button color="secondary">Theme Button</Button>

      <CustomThemeButton variant="contained">
        CustomThemeButton
      </CustomThemeButton>

      <Root>
        <Typography>donw(md): red</Typography>
        <Typography>up(md): blue</Typography>
        <Typography>up(lg): green</Typography>
      </Root>
    </div>
  );
};

export default test;

const Root = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    backgroundColor: red[500],
  },
  [theme.breakpoints.up("md")]: {
    backgroundColor: blue[500],
  },
  [theme.breakpoints.up("lg")]: {
    backgroundColor: green[500],
  },
}));

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

const CustomThemeButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: "#fff",
  margin: "10px",
  "&:hover": {
    backgroundColor: "#000",
  },
  "&:disabled": {
    backgroundColor: "#fff",
    color: "#000",
  },
}));
