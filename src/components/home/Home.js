import { useState, useContext } from "react";
import Menu from "../UI/Menu";
import Button from "../UI/Button";
import DateChangeBox from "./DataChange/DateChangeBox";
import classes from "./Home.module.css";
import RidesListContainer from "./RidesList/RidesListContainer";
import AddRideForm from "./AddRide/AddRideForm";
import RideInfo from "./RideInfo/RideInfo";
import EditRideForm from "./EditRide/EditRideForm"
import { RidesContextProvider } from "../../store/rides-context";

const Home = () => {
  const [showForm, setShowForm] = useState(false);
  const [showInfo, setShowInfo] = useState(false)
  const [showEdit, setShowEdit] = useState(false)
  

  return (
    <>
      <Menu />
      <p className={classes.p}>Cześć, Adam</p>
      <Button text="Dzień" />
      <DateChangeBox />
      <RidesContextProvider>
      <RidesListContainer info={() => setShowInfo(!showInfo)} edit={() => setShowEdit(!showEdit)}/>
        {showForm && <AddRideForm showForm={() => setShowForm(!showForm)}/>}
      {showInfo && <RideInfo hideInfo={() => setShowInfo(!showInfo)}/>}
      {showEdit && <EditRideForm hideEdit={() => setShowEdit(!showEdit)}/>}
      </RidesContextProvider>
      <Button onClick={() => setShowForm(!showForm)} text={"Dodaj jazde"}></Button>
    </>
  );
};

export default Home;
