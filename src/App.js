import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./containers/Login/Login";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "./components/navigation/Navbar";
import Unauthorized from "./containers/Unauthorized/Unauthorized";
import Home from "./containers/Home/Home";
import Account from "./containers/Account/Account";

const USER_TYPES = {
  UNAUTHORIZED_USER: "Unauthorized User",
  AUTHORIZED_USER: "Authorized User",
};

const token = "123456abcdef";

const CURRENT_USER_TYPE =
  sessionStorage.getItem("auth-token") === token
    ? USER_TYPES.AUTHORIZED_USER
    : USER_TYPES.UNAUTHORIZED_USER;

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <div>
          {/* Navbar here */}
          {/* <Link to={"/home"}>Home</Link>
          <Link to={"/"}>Login</Link>
          <Link to={"/account"}>Account</Link>
          <div>Username: {CURRENT_USER_TYPE} </div> */}
        </div>

        <AppRoutes />
      </div>
    </ThemeProvider>
  );
}

function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route
          path="/home"
          element={
            <AuthElement>
              <Home />
            </AuthElement>
          }
        ></Route>
        <Route
          path="/account"
          element={
            <AuthElement>
              <Account />
            </AuthElement>
          }
        ></Route>
        <Route
          path="/"
          element={
            <PublicElement>
              <Login />
            </PublicElement>
          }
        ></Route>
        <Route path="/unauthorized" element={<Unauthorized />}></Route>
        <Route path="*" element={<div>Page Not Found!</div>}></Route>
      </Routes>
    </div>
  );
}

function PublicElement({ children }) {
  return <>{children}</>;
}

function AuthElement({ children }) {
  if (CURRENT_USER_TYPE === USER_TYPES.AUTHORIZED_USER) {
    return (
      <>
        <Navbar />
        {children}
      </>
    );
  } else {
    return <Navigate to={"/unauthorized"} />;
  }
}

export default App;
