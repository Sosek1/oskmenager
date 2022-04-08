import { useContext } from "react";
import AuthContext from "../../store/login-context";
import classes from "./Menu.module.css";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


function Menu() {
  const authCtx = useContext(AuthContext);

  return (
    <div className={classes.menuBar}>
      <p>Logo</p>
      <ExitToAppIcon  style={{color:'white',marginRight:'50px', cursor:'pointer'}}onClick={() => authCtx.onLogout()}/>
    </div>
  );
}

export default Menu;
