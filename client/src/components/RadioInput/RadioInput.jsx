import React, { Component } from 'react'

export default class RadioInput extends Component {
    
    isChecked(){
        if(this.props.status === 'In Stock') return true
        else return false
    }

    render() {
        return (
            <div>
                <form className='form__radio-input'>
                    <div>
                        <input 
                            type="radio" 
                            onChange={e=>this.props.handleChange(e)} 
                            name="status" 
                            checked = {this.isChecked()}
                            value="In Stock"/>
                        <label className='form__radio-label' htmlFor="status" >In stock</label>
                    </div>
                    <div>
                        <input type="radio" onChange={e=>this.props.handleChange(e)} name="status" value="Out of Stock"/>
                        <label className='form__radio-label' htmlFor="status" >Out of stock</label>
                    </div>
                </form>
            </div>
        )
    }
}
