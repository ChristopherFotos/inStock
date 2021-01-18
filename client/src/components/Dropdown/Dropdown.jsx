import React, { Component } from 'react'
import warning from '../../assets/images/Icons/error-24px.svg'


export default class Dropdown extends Component {

    state = {
        
    }



    render() {
        return (
            <div>
                <label className='form__label' htmlFor="category">{this.props.title}</label>
                <select name={this.props.name} className={`form__dropdown ${this.props.empty ? 'form__input--empty' : ''}`} onChange={(e)=>this.props.handleChange(e)}>
                    {this.props.options.map(o => <option value={o}>{o}</option>)}
                    <option value="Electronics">Electronics</option>
                    <option value="Gear">Gear</option>
                    <option value="Accessories">Accessories</option>
                    <option value="Health">Health</option>
                    <option value="Apparel">Apparel</option>
                </select>
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
