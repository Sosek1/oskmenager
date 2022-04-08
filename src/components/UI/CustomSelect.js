import React, {useState} from "react";
import classes from "./CustomSelect.module.css";

const CustomSelect = (props) => {
    const [expand,setExpand] = useState(false)
    return(
        <div className={classes.select}>
            <p onClick={() => setExpand(!expand)}>exp</p>
            <ul className={expand ? classes.open : ""}>
                {props.option.map((item)=>
                    <li key={Math.random()*100}>{item}</li>
                )}
            </ul>
        </div>
    )
}

export default CustomSelect