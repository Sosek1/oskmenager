import React from "react";
import { RidesContextProvider } from "../../../store/rides-context";
import RidesList from "./RidesList";
import classes from "./RidesListContainer.module.css";

const RidesListContainer = (props) => {

  return (
      <div className={classes.container}>
        <RidesList info={props.info} edit={props.edit}/>
      </div>
  );
};

export default RidesListContainer;
