import React, { useContext } from "react";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import AuthContext from "./store/auth-context";

function App() {
  const ctx = useContext(AuthContext);
  return (
    <>
      {!ctx.isLoggedIn && <Login />}
      {ctx.isLoggedIn && <Home />}
    </>
  );
}

export default App;
