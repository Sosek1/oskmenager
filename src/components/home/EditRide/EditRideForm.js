import React, {useState, useContext} from 'react'
import classes from "./EditRideForm.module.css"
import Input from "../../UI/Input"
import RidesContext from '../../../store/rides-context'
import CloseIcon from '@material-ui/icons/Close';

const EditRideForm = (props) => {
    const ctx = useContext(RidesContext)
    
    const [name, setName] = useState(ctx.ridesList[ctx.activeRide].name)
    const [surname, setSurname] = useState(ctx.ridesList[ctx.activeRide].surname)
    const [hour, setHour] = useState(ctx.ridesList[ctx.activeRide].hour)

    const nameHandler = (e) => {
        setName(e.target.value)
    }

    const surnameHandler = (e) => {
        setSurname(e.target.value)
    }

    const hourHandler = (e) => {
        setHour(e.target.value)
    }

    const editFormHandler = (e) => {
        e.preventDefault();
        const editedRideData = {
            name:name,
            surname:surname,
            hour:hour,
        }
    ctx.onEdit(editedRideData)    
    props.hideEdit(false)
    }

    return (
        <form className={classes.editContainer}>
            <div class={classes.closeWrapper}>
            <CloseIcon onClick={props.hideEdit} style={{color:'white',marginRight:'10px', cursor:'pointer'}}/>
            </div>
            <Input  value={name} onChange={nameHandler}/>
            <Input  value={surname} onChange={surnameHandler}/>
            <Input  value={hour} onChange={hourHandler}/>
            <button type="submit" onClick={editFormHandler} className={classes.editButton}>Zapisz</button>
        </form>
    )
}

export default EditRideForm
