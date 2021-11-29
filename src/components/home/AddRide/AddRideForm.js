import React from "react";
import ReactDOM from "react-dom";
import Input from "../../UI/Input";
import Button from "../../UI/Button";
import classes from "./AddRideForm.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} />;
};

const Modal = (props) => {
  return (
    <form className={classes.addRideFormContainer}>
      <Input className={classes.addRideFormInput}></Input>
      <Input className={classes.addRideFormInput}></Input>
      <Button className={classes.addRideFormButton}>Dodaj</Button>
    </form>
  );
};

const AddRideForm = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Modal />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default AddRideForm;
