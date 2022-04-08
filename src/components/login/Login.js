import { useRef, useState, useReducer, useEffect, useContext } from "react";
import AuthContext from "../../store/login-context";
import Input from "../UI/Input";
import classes from "./Login.module.css";

const emailReducer = (state, action) => {
  const emailValidation = (value) => {
    const regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return regex.test(value);
  };
  if (action.type === "USER_INPUT") {
    return { value: action.value, isValid: emailValidation(action.value) };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: emailValidation(state.value) };
  }
  return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
  const passwordValidation = (value) => {
    const regex =
      // /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;
      /[a-z]/;
    return regex.test(value);
  };
  if (action.type === "USER_INPUT") {
    return { value: action.value, isValid: passwordValidation(action.value) };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: passwordValidation(state.value) };
  }
  return { value: "", isValid: false };
};

const Login = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  const authCtx = useContext(AuthContext);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      // console.log("Checking form validity");
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);
    return () => {
      clearTimeout(identifier);
    };
  }, [ ]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", value: event.target.value });
  };

  // const validateEmailHandler = () => {
  //   dispatchEmail({ type: "INPUT_BLUR" });
  // };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT", value: event.target.value });
  };

  // const validatePasswordHandler = () => {
  //   dispatchPassword({ type: "INPUT_BLUR" });
  // };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      authCtx.onLogin(emailState.value, passwordState.value);
    } else {
      alert("Niepoprawne dane");
    }
    // console.log(authCtx.isLoggedIn);
    // console.log(formIsValid);
  };

  return (
    <form className={classes["login-wrapper"]} onSubmit={submitHandler}>
      <p>Zaloguj się</p>
      <Input
        ref={emailInputRef}
        id="email"
        type="email"
        isValid={emailIsValid}
        value={emailState.value}
        onChange={emailChangeHandler}
        onCheck={emailIsValid}
        placeholder="Login"
      />
      <Input
        ref={passwordInputRef}
        id="password"
        type="password"
        isValid={passwordIsValid}
        value={passwordState.value}
        onChange={passwordChangeHandler}
        onCheck={passwordIsValid}
        placeholder="Hasło"
      />
      <button className={classes.button} type="submit">
        Zaloguj
      </button>
    </form>
  );
};

export default Login;
