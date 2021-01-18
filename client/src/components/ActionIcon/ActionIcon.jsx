import React from 'react'
import './ActionIcon.scss';

function ActionIcon({type, clickAction}) {
    if(type.toLowerCase() === "delete"){
        return (
            <div className="icon">
                <button className="icon__bttn delete" onClick={clickAction} />
            </div>
        )
    }else if(type.toLowerCase() === "edit"){
        return (
            <div className="icon">
                <button className="icon__bttn edit" onClick={clickAction} />
            </div>
        )
    }
}

export default ActionIcon
