import React, { Component } from 'react'
import arrow from '../../assets/images/Icons/arrow_back-24px.svg'
import './AddWarehouse.scss'

export default class AddWarehouse extends Component {
    constructor(props){
        super()
        this.state = {
            id: "2922c286-16cd-4d43-ab98-c79f698aeab0",
            name: "Manhattan",
            address: "503 Broadway",
            city: "New York",
            country: "USA",
            contact: {
              name: "Parmin Aujla",
              position: "Warehouse Manager",
              phone: "+1 (646) 123-1234",
              email: "paujla@instock.com"
            }
        }
    }

    handleDetailChange(e){
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    handleContactChange(e){
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className = 'form'>

                {/* header */}
                <div className="form__header">
                    <img src={arrow} className = 'form__back-arrow' alt=""/> 
                    <h1 className="form__heading titilliumWeb-Regular">Add New Warehouse</h1>                    
                </div>

                {/* flex container */}
                <div className="flex-container">

                    {/* details section */}
                    <div className="form__left-section">
                        <h2 className="form__subheading">Warehouse Details</h2>

                        <div className="form__input-wrapper">
                            <label htmlFor="name" className="form__label">Warehouse Name</label>
                            <input type="text" className='form__input'/>
                        </div>

                        <div className="form__input-wrapper">
                            <label htmlFor="address" className="form__label">Street Address</label>
                            <input type="text" className='form__input'/>
                        </div>

                        <div className="form__input-wrapper">
                            <label htmlFor="city" className="form__label">City</label>
                            <input type="text" className='form__input'/>
                        </div>

                        <div className="form__input-wrapper">
                            <label htmlFor="country" className="form__label">Country</label>
                            <input type="text" className='form__input'/>
                        </div>
                    </div>

                    {/* contact */}
                    <div className="form__right-section">
                    <h2 className="form__subheading">Warehouse Details</h2>

                        <div className="form__input-wrapper">
                            <label htmlFor="name" className="form__label">Warehouse Name</label>
                            <input type="text" data-type='contact' className='form__input'/>
                        </div>

                        <div className="form__input-wrapper">
                            <label htmlFor="address" className="form__label">Street Address</label>
                            <input type="text" data-type='contact' className='form__input'/>
                        </div>

                        <div className="form__input-wrapper">
                            <label htmlFor="city" className="form__label">City</label>
                            <input type="text" data-type='contact' className='form__input'/>
                        </div>

                        <div className="form__input-wrapper">
                            <label htmlFor="country" className="form__label">Country</label>
                            <input type="text" data-type='contact' className='form__input'/>
                        </div>
                    </div>
                </div>
                <div className="form__button-container">
                    <button className="form__button">Cancel</button>
                    <button className="form__button">Add Warehouse</button>
                </div>
            </div>
        )
    }
}
