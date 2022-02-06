import React, {useContext} from 'react'
import RidesContext from '../../../store/rides-context';
import classes from "./RideInfo.module.css";

const RideInfo = (props) => {
    const rideCtx = useContext(RidesContext)
    let indexObiektu = rideCtx.activeRide
    
    return (
        <div className={classes.infoContainer}>
             <p className={classes.close} onClick={props.hideInfo} >X</p>
             <div className={classes.infoWrapper}> 
                <p className={classes.InformationParagraph}>{`Imię: ${rideCtx.ridesList[indexObiektu].name}`}</p>
                <p className={classes.InformationParagraph}>{`Godzina: ${rideCtx.ridesList[indexObiektu].hour}`}</p> 
            </div> 
           
        </div>
    )
}

export default RideInfo
