import React, { useRef } from "react";
import classes from "./LoginInput.module.css";

const LoginInput = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  return (
    <div className={classes["loginInput"]}>
      <input
        ref={inputRef}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        placeholder={props.placeholder}
      ></input>
    </div>
  );
});

export default LoginInput;
