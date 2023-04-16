import { Box, Container, CssBaseline, Typography } from "@mui/material";
import React from "react";

const Unauthorized = () => {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h2">
          Unauthorized!
        </Typography>
      </Box>
    </Container>
  );
};

export default Unauthorized;
