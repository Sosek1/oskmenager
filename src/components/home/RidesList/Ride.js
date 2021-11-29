import React from "react";
import classes from "./Ride.module.css";

const Ride = (props) => {
  return (
    <li className={classes.rideBlock}>
      <div className={classes.hour}>{props.hour}</div>
      <div className={classes.name}>{props.name}</div>
      <div className={classes.options}></div>
    </li>
  );
};

export default Ride;
