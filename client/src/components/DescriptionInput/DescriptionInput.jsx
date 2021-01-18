import React, { Component } from 'react'
import './DescriptionInput.scss'
import '../styles/form.scss'
import warning from '../../assets/images/Icons/error-24px.svg'


export default class DescriptionInput extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <label className='form__label' htmlFor="description">Description</label>
                <textarea 
                    className= {`form__description-input ${this.props.empty ? 'form__input--empty' : ''}`} 
                    name="description" 
                    id="" 
                    cols="30" 
                    rows="10" 
                    onChange ={this.props.handleChange}
                    placeholder="Please enter an item description">
                </textarea>
                {this.props.empty && 
                    <span className="form__validation-span">
                        <img src={warning} alt="" className="form__warning"/>
                         This field is required
                    </span>
                }
            </div>
        )
    }
}
