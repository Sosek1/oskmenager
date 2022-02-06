import React, { useState, useContext } from "react";
import Input from "../../UI/Input";
import classes from "./AddRideForm.module.css";
import RidesContext from "../../../store/rides-context";

const AddRideForm = (props) => {
  const [userName, setUserName] = useState("")

  const [hour, setHour] = useState("")

  const ctx = useContext(RidesContext);
  
  const nameHandler = (e) => {
    setUserName(e.target.value)
  };

  const hourHandler = (e) => {
    setHour(e.target.value)
  };

  const submitHandler = (e) => {
    e.preventDefault();
    
    const rideData = {
      name: userName,
      hour: hour,
      key: Math.floor(Math.random()*100),
      id: Math.floor(Math.random()*100).toString()
    };
    setUserName("")
    setHour("")
    if(userName !== "" && hour !== ""){
      ctx.onAdd(rideData);
      props.showForm(false)
    }else{
      alert("Niepoprawne dane")
    }
  };

  return (
    <form className={classes.addRideFormContainer} onSubmit={submitHandler}>
      <p onClick={props.showForm} className={classes.close}>X</p>
      <Input
        className={classes.addRideFormInput}
        value={userName}
        placeholder = "Imię"
        onChange={nameHandler}
      ></Input>
      <Input
        className={classes.addRideFormInput}
        value={hour}
        placeholder = "Godzina"
        onChange={hourHandler}
      ></Input>
      <button type="submit" onClose={props.showForm}className={classes.addRideFormButton} >Dodaj</button>
    </form> 
  );
};

export default AddRideForm;
