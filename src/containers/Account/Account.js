import { Box, Container, CssBaseline, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const Account = () => {
  const state = useSelector((state) => state);

  console.log(state);

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
          Email: {state.email}
        </Typography>
        <Typography component="p" variant="subtitle1">
          Password: {state.password}
        </Typography>
      </Box>
    </Container>
  );
};

export default Account;
