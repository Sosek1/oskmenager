import React, { useState, useContext } from "react";
import Input from "../../UI/Input";
import CustomSelect from "../../UI/CustomSelect";
import classes from "./AddRideForm.module.css";
import RidesContext from "../../../store/rides-context";
import CloseIcon from '@material-ui/icons/Close';

const AddRideForm = (props) => {
  const [userName, setUserName] = useState("")
  const [userSurname, setUserSurname] = useState("")
  const [hour, setHour] = useState("")

  const ctx = useContext(RidesContext);
  
  const nameHandler = (e) => {
    setUserName(e.target.value)
  };

  const hourHandler = (e) => {
    setHour(e.target.value)
  };

  const surnameHandler = (e) => {
    setUserSurname(e.target.value )
  }
  
  const nameValidation = (inputData) => {
   return /^[A-Za-z]+$/.test(inputData)
  //  return /^[a-z]+$/i.test(inputData)
  //  return /^[A-Za-z]\S*$/.test(inputData)
  }

  const surnameValidation = (inputData) => {
    return /^[A-Za-z]+$/.test(inputData)
   //  return /^[a-z]+$/i.test(inputData)
   //  return /^[A-Za-z]\S*$/.test(inputData)
   }

  const hourValidation = (inputData) => {
    return /^([0-1]*[0-9]|2[0-3]):[0-5][0-9]$/.test(inputData)
  }


  const submitHandler = (e) => {
    e.preventDefault();
    
    const rideData = {
      hour: hour,
      name: userName,
      surname: userSurname,
      key: Math.floor(Math.random()*100),
      id: Math.floor(Math.random()*100).toString()
    };
    setUserName("")
    setUserSurname("")
    setHour("")
    if(hourValidation(hour)){
      ctx.onAdd(rideData);
      props.showForm(false)
    }else{
      alert("Niepoprawne dane")
    }
  };
 
  return (
    <form className={classes.addRideFormContainer} onSubmit={submitHandler}>
      <div className={classes.formHeader}>
        <CloseIcon onClick={props.showForm} style={{ color: 'white',cursor: 'pointer' }}/>
      </div>
      <input
        type="text"
        className={classes.addRideFormInput}
        value={userName}
        placeholder = "Imię"
        onChange={nameHandler}
      ></input>
      <input
        type="text"
        className={classes.addRideFormInput}
        value={userSurname}
        placeholder = "Nazwisko"
        onChange={surnameHandler}
      ></input>
      <input
        type="text"
        className={classes.addRideFormInput}
        value={hour}
        placeholder = "Godzina"
        onChange={hourHandler}
      ></input>
      <button type="submit" onClose={props.showForm}className={classes.addRideFormButton} >Dodaj</button>
    </form> 
  );
};

export default AddRideForm;
