import React, {useState, useContext} from 'react'
import classes from "./EditRideForm.module.css"
import Input from "../../UI/Input"
import RidesContext from '../../../store/rides-context'

const EditRideForm = (props) => {
    const ctx = useContext(RidesContext)
    
    const [name, setName] = useState(ctx.ridesList[ctx.activeRide].name)
    const [hour, setHour] = useState(ctx.ridesList[ctx.activeRide].hour)

    const nameHandler = (e) => {
        setName(e.target.value)
    }

    const hourHandler = (e) => {
        setHour(e.target.value)
    }

    const editFormHandler = (e) => {
        e.preventDefault();
        const editedRideData = {
            name:name,
            hour:hour,
        }
    ctx.onEdit(editedRideData)    
    props.hideEdit(false)
    }

    return (
        <form className={classes.editContainer}>
            <p className={classes.close} onClick={props.hideEdit}>X</p>
            <div className={classes.editWrapper}> 
                <Input  value={name} onChange={nameHandler}/>
                <Input  value={hour} onChange={hourHandler}/>
                <button type="submit" onClick={editFormHandler} className={classes.editButton}>Zapisz</button>
            </div>
        </form>
    )
}

export default EditRideForm
