import ReactDOM from "react-dom";
import App from "./App";
import { LoginContextProvider } from "./store/login-context";

ReactDOM.render(
  <LoginContextProvider>
    <App />
  </LoginContextProvider>,
  document.getElementById("root")
);
