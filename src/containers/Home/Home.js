import { Box, Container, CssBaseline, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  const state = useSelector((state) => state);

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
          Welcome to the Home page!
        </Typography>
        <Typography component="p" sx={{ mt: 5 }} variant="subtitle1">
          Hello {state.email}
        </Typography>
        <Typography component="p" sx={{ mt: 5 }} variant="subtitle1">
          Proceed to the <Link to="/account">account page</Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;
