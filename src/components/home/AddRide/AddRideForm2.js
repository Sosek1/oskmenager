import React, { useState, useContext } from "react";
import Input from "../../UI/Input";
import classes from "./AddRideForm.module.css";
import RidesContext from "../../../store/rides-context";

const AddRideForm2 = () => {
  const [userInput, setUserInput] = useState({
    name: "",
    hour: "",
    key:0,
  });

  const ctx = useContext(RidesContext);

  const nameHandler = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, name: e.target.value };
    });
  };

  const hourHandler = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, hour: e.target.value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const rideData = {
      name: userInput.name,
      hour: userInput.hour,
      key: Math.floor(Math.random() * 100)
    };

    ctx.onAdd(rideData);
    // console.log(userInput);
    // console.log(ctx.ridesList);
  };

  return (
    <form className={classes.addRideFormContainer} onSubmit={submitHandler}>
      <Input
        className={classes.addRideFormInput}
        value={userInput.name}
        onChange={nameHandler}
      ></Input>
      <Input
        className={classes.addRideFormInput}
        value={userInput.hour}
        onChange={hourHandler}
      ></Input>
      <button type="submit" className={classes.addRideFormButton}>Dodaj</button>
    </form>
  );
};

export default AddRideForm2;
