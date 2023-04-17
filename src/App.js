import "./App.css";
import {
  HashRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Login from "./containers/Login/Login";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "./components/navigation/Navbar";
import Unauthorized from "./containers/Unauthorized/Unauthorized";
import Home from "./containers/Home/Home";
import Account from "./containers/Account/Account";
import { useSelector } from "react-redux";

const USER_TYPES = {
  UNAUTHORIZED_USER: "Unauthorized User",
  AUTHORIZED_USER: "Authorized User",
};

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <AppRoutes />
      </div>
    </ThemeProvider>
  );
}

function AppRoutes() {
  return (
    <div>
      <Router>
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
      </Router>
    </div>
  );
}

function PublicElement({ children }) {
  return <>{children}</>;
}

function AuthElement({ children }) {
  const state = useSelector((state) => state);

  const CURRENT_USER_TYPE =
    state.email === "darryn@randrtechsa.com"
      ? USER_TYPES.AUTHORIZED_USER
      : USER_TYPES.UNAUTHORIZED_USER;

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
