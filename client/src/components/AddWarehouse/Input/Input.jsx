import React from 'react'
import warning from '../../../assets/images/Icons/error-24px.svg'

export default function Input(props) {
    let empty = props.empty ? 'form__input--empty' : ''
    return (
        <div className="form__input-wrapper">
            {props.empty}
            <label htmlFor={props.name} className="form__label">{props.text}</label>
            <input onChange={(e)=>{props.handleChange(e)}} name={props.name} type="text" className={`form__input ${empty}`}/>
            {props.empty && 
                <span className="form__validation-span">
                    <img src={warning} alt="" className="form__warning"/>
                    This field is required
                </span>
            }
        </div>
    )
}
