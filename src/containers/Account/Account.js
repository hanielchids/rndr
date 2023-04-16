import { Box, Container, CssBaseline, Typography } from "@mui/material";
import React from "react";

const Account = () => {
  const email = sessionStorage.getItem("email");
  const password = sessionStorage.getItem("password");

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Welcome to the Account page!
        </Typography>
        <Typography component="p" sx={{ mt: 5 }} variant="subtitle1">
          Email: {email}
        </Typography>
        <Typography component="p" variant="subtitle1">
          Password: {password}
        </Typography>
      </Box>
    </Container>
  );
};

export default Account;
