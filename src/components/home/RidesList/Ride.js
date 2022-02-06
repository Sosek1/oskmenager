import React from "react";
import classes from "./Ride.module.css";

const Ride = (props) => {
  return (
    <li className={classes.rideBlock} >
      <div className={classes.hour}>{props.hour}</div>
      <div className={classes.name}>{props.name}</div>
      <div className={classes.options}>
      <button onClick={() => {props.info();props.infoId()}}>Info</button>
        <button onClick={() => {props.edit();props.infoId()}}>Edit</button>
        <button onClick={props.onDelete}>Delete</button>
      </div>
    </li>
  );
};

export default Ride;
