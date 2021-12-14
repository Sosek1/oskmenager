import { useContext } from "react";
import AuthContext from "../../store/login-context";
import classes from "./Menu.module.css";
// import AccessibleIcon from '@mui/icons-material/Accessible';

function Menu() {
  const authCtx = useContext(AuthContext);

  return (
    <div className={classes.menuBar}>
      <p>Logo</p>
      <p className={classes.logout} onClick={() => authCtx.onLogout()}>
        Wyloguj się
      </p> 
    </div>
  );
}

export default Menu;
