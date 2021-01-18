import React from 'react'
import {Link} from 'react-router-dom'
import './ActionIcon.scss';

function ActionIcon(props) {
    console.log('CARD PROPS PROPS PROPS',props);
    if(props.type.toLowerCase() === "delete"){
        return (
            <div className="icon">
                <button className="icon__bttn delete" data-name={props.itemName} data-id={props.itemId} onClick={props.clickAction} />
            </div>
        )
    }else if(props.type.toLowerCase() === "edit"){
        return (
            <div className="icon">
                <Link to={`/inventory/${props.itemId}/edit`} className = 'edit-button'>
                    <button className="icon__bttn edit" onClick={props.clickAction} />
                </Link>
            </div>
        )
    }
}

export default ActionIcon
