import React, { useContext } from "react";
import RidesContext from "../../../store/rides-context";
import Ride from "./Ride";
import classes from "./RidesList.module.css";

const RidesList = (props) => {
  const rideCtx = useContext(RidesContext);
  console.log(rideCtx.ridesList)
  return (
    <ul className={classes.container}>
      {rideCtx.ridesList.map((ride) => (
        <Ride hour={ride.hour} name={ride.name} key={ride.key}/>
      ))}
    </ul>
  );
};

export default RidesList;
