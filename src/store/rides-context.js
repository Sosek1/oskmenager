import React, { useState } from "react";

const RidesContext = React.createContext({
  ridesList: {},
  onAdd: (data) => {},
  onDelete: () => {},
});

export const RidesContextProvider = (props) => {
  const [rides, setRides] = useState([
    {
      hour: "12:00",
      name: "Jan",
      key:1,
    },
    {
      hour: "12:00",
      name: "Bartek ",
      key:2
    },
    {
      hour: "12:00",
      name: "Kamil",
      key:3
    },
  ]);

  

  const addRideHandler = (data) => {
    setRides((prevRides) => {
      return [...prevRides, data]
    });
    
  };
  console.log(rides)

  return (
    <RidesContext.Provider
      value={{
        ridesList: rides,
        onAdd: addRideHandler,
      }}
    >
      {props.children}
    </RidesContext.Provider>
  );
};

export default RidesContext;
