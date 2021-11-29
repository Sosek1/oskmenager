import React, { useRef } from "react";
import classes from "./input.module.css";

const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  return (
    <div
      className={`${classes.loginInput} ${
        props.isValid === false ? classes.invalid : ""
      }`}
    >
      <input
        ref={inputRef}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        className={props.onCheck ? "" : classes["blur"]}
      ></input>
    </div>
  );
});

export default Input;
