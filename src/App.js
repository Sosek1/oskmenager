import React, { useContext } from "react";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import AuthContext from "./store/login-context";
import classes from "./components/home/Home.module.css";
import "./index.css";

function App() {
  const ctx = useContext(AuthContext);
  return (
    <>
      {!ctx.isLoggedIn && <Login />}
      {ctx.isLoggedIn && <Home className={classes.body} />}
    </>
  );
}

export default App;
