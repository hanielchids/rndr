import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer";
import { styled } from "@mui/material/styles";

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: "white",
  fontSize: "20px",
  marginLeft: theme.spacing(20),
  borderBottom: "1px solid transparent",
  "&:hover": {
    color: "#65C86E",
  },
}));

function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="static" sx={{ bgcolor: "secondary.main" }}>
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" sx={{ flexGrow: "1", cursor: "pointer" }}>
          Navbar
        </Typography>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div sx={{ marginLeft: theme.spacing(5), display: "flex" }}>
            <StyledLink to="/home">Home</StyledLink>
            <StyledLink to="/account">Account</StyledLink>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
