import { useState } from "react";
import Menu from "../UI/Menu";
import Button from "../UI/Button";
import DateChangeBox from "./DataChange/DateChangeBox";
import classes from "./Home.module.css";
import RidesListContainer from "./RidesList/RidesListContainer";
import AddRideForm2 from "./AddRide/AddRideForm2";
// import AddRideForm from "./AddRide/AddRideForm2";
import { RidesContextProvider } from "../../store/rides-context";
const Home = () => {
  const [showForm, setShowForm] = useState(false);

  const showModalHandler = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      <Menu />
      <p className={classes.p}>Cześć, Adam</p>
      <Button text="Dzień" />
      <DateChangeBox />
      <RidesListContainer />
      {/* {showForm && <AddRideForm />} */}
      <RidesContextProvider>
        {showForm && <AddRideForm2 />}
      </RidesContextProvider>
      <Button onClick={showModalHandler} text={"Dodaj jazde"}></Button>
    </>
  );
};

export default Home;
