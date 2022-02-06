import React, { useState } from "react";

const RidesContext = React.createContext({
  ridesList: {},
  activeRide:0,
  onAdd: (data) => {},
  onDelete: (id) => {},
  setActiveRide:(id) => {}
});

export const RidesContextProvider = (props) => {
  const [hideForm,setHideForm] = useState(false)
  const [rides, setRides] = useState([
    {
      hour: "12:00",
      name: "Jan",
      key:1,
      id:"0"
    },
    {
      hour: "12:00",
      name: "Bartek ",
      key:2,
      id:"1"
    },
    {
      hour: "12:00",
      name: "Kamil",
      key:3,
      id:"2"
    },
  ]);
  const [activeRidesId,setActiveRidesId] = useState(0)

  const addRideHandler = (data) => {
    setRides((prevRides) => {
      return [...prevRides, data]
    });
  };

  const deleteRideHandler = (id) => {
    setRides(rides.filter((ride) => ride.id !== id))
  }

  const activeRidesIdHandler = (id) =>{
    for(let i = 0; i < rides.length; i++){
      if(rides[i].id == id){
        setActiveRidesId(rides.indexOf(rides[i]))
      }
    }
  }

  const editRideHandler = (data) => {
    setRides((prevRides) => {
      if (activeRidesId == 0){
        return [
          {hour:data.hour, name:data.name, key:rides[activeRidesId].key, id:rides[activeRidesId].id},
          ...rides.slice(1)
        ]
      } else{
        return[
          ...rides.slice(0,activeRidesId),
          {hour:data.hour, name:data.name, key:rides[activeRidesId].key, id:rides[activeRidesId].id},
          ...rides.slice(activeRidesId+1)
        ] 
      }
    }) 
  }
  
  return (
    <RidesContext.Provider
      value={{
        ridesList: rides,
        activeRide: activeRidesId,
        onAdd: addRideHandler,
        onDelete: deleteRideHandler,
        onEdit:editRideHandler,
        setActiveRide: activeRidesIdHandler
      }}
    >
      {props.children}
    </RidesContext.Provider>
  );
};

export default RidesContext;
