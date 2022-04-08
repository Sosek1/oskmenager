import React, { useContext } from "react";
import RidesContext from "../../../store/rides-context";
import Ride from "./Ride";
import classes from "./RidesList.module.css";

const RidesList = (props) => {
  const rideCtx = useContext(RidesContext);

  const deleteHandler = (id) => {
    rideCtx.onDelete(id)
  }

  const rideIdHandler = (id) => {
    rideCtx.setActiveRide(id)
  }
 
  return (
    <ul className={classes.container}>
      {rideCtx.ridesList.map((ride) => (
        <Ride hour={ride.hour} name={ride.name} surname={ride.surname} key={ride.key} id={ride.id} onDelete={() => deleteHandler(ride.id)} info={props.info} infoId={()=>rideIdHandler(ride.id)} edit={props.edit}/>
      ))}
    </ul>
  );
};

export default RidesList;
