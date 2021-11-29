import React, { useState } from "react";

const RidesContext = React.createContext({
  ridesList: {},
  onAdd: (name, hour) => {},
  onDelete: () => {},
});

export const RidesContextProvider = (props) => {
  const [rides, setRides] = useState([
    {
      hour: "12:00",
      name: "Jan",
    },
    {
      hour: "12:00",
      name: "Bartek ",
    },
    {
      hour: "12:00",
      name: "Kamil",
    },
  ]);

  const addRideHandler = (name, hour) => {
    setRides((prevRides) => {
      return { ...prevRides, hour: hour, name: name };
    });
  };

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
