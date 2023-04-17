import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userSchema } from "../../validations/UserValidation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { CircularProgress, TextField } from "@mui/material";

const Login = () => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
  });

  const handleEmailChange = (e) => {
    setEmailInput(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPasswordInput(e.target.value);
  };

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [loading]);

  const userLogin = async (data) => {
    let hardcodedCred = {
      email: "darryn@randrtechsa.com",
      password: "P@55w0rd@1",
    };

    if (
      emailInput === hardcodedCred.email &&
      passwordInput === hardcodedCred.password
    ) {
      navigate("/home");
    } else {
      alert("wrong email or password combination");
    }
  };

  const loadHandler = () => {
    setLoading(!loading);
    setTimeout(() => {
      setLoading(!loading);
      setShow(!show);
      userLogin();
    }, 2000);
  };

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
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>H</Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        {loading ? (
          <CircularProgress />
        ) : (
          <Box
            component="form"
            onSubmit={handleSubmit(loadHandler)}
            sx={{ mt: 1 }}
          >
            <Typography component="p" variant="subtitle1" color="red">
              {errors.email?.message}
            </Typography>
            <TextField
              variant="outlined"
              margin="normal"
              type="text"
              name="email"
              {...register("email")}
              onChange={handleEmailChange}
              placeholder="email@email.com"
              fullWidth
              id="email"
              label="Email Address"
              autoComplete="email"
              autoFocus
            />
            <Typography component="p" variant="subtitle1" color="red">
              {errors.password?.message}
            </Typography>
            <TextField
              variant="outlined"
              margin="normal"
              type="password"
              name="password"
              {...register("password")}
              onChange={handlePasswordChange}
              placeholder="password"
              fullWidth
              label="Password"
              id="password"
              autoComplete="current-password"
            />

            <Button
              type="submit"
              id="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, py: 2, bgcolor: "secondary.main" }}
            >
              Login
            </Button>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default Login;
