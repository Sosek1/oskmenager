import React from "react";
import classes from "./Ride.module.css";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import InfoIcon from '@material-ui/icons/Info';

const Ride = (props) => {
  return (
    <li className={classes.rideBlock} >
      <div className={classes.hour}>{props.hour}</div>
      <div className={classes.name}>{props.name}</div>
      <div className={classes.surname}>{props.surname}</div>
      <div className={classes.options}>
        <InfoIcon onClick={() => {props.info();props.infoId()}} style={{cursor:'pointer'}}></InfoIcon>
        <EditIcon onClick={() => {props.edit();props.infoId()}} style={{cursor:'pointer'}}></EditIcon>
        <DeleteIcon onClick={props.onDelete} style={{cursor:'pointer'}}></DeleteIcon>
      </div>
    </li>
  );
};

export default Ride;
