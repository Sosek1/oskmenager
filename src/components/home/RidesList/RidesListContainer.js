import React from "react";
import { RidesContextProvider } from "../../../store/rides-context";
import RidesList from "./RidesList";
import classes from "./RidesListContainer.module.css";

const RidesListContainer = (props) => {
  return (
    <RidesContextProvider>
      <div className={classes.container}>
        <RidesList />
      </div>
    </RidesContextProvider>
  );
};

export default RidesListContainer;
