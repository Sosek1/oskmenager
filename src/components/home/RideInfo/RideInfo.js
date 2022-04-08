import React, {useContext} from 'react'
import RidesContext from '../../../store/rides-context';
import classes from "./RideInfo.module.css";
import CloseIcon from '@material-ui/icons/Close';

const RideInfo = (props) => {
    const rideCtx = useContext(RidesContext)
    let indexObiektu = rideCtx.activeRide
    
    return (
        <div className={classes.infoContainer}>
             <div className={classes.closeWrapper}>
                <CloseIcon onClick={props.hideInfo} style={{color:'white',marginRight:'10px', cursor:'pointer'}}/>
            </div>
             <div className={classes.infoWrapper}> 
                <p className={classes.InformationParagraph}>{`Imię: ${rideCtx.ridesList[indexObiektu].name}`}</p>
                <p className={classes.InformationParagraph}>{`Nazwisko: ${rideCtx.ridesList[indexObiektu].surname}`}</p>
                <p className={classes.InformationParagraph}>{`Godzina: ${rideCtx.ridesList[indexObiektu].hour}`}</p> 
            </div>    
        </div>
    )
}

export default RideInfo
