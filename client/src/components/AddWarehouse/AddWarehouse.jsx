import React, { Component } from 'react'
import arrow from '../../assets/images/Icons/arrow_back-24px.svg'
import add from '../../assets/images/Icons/add.svg'
import axios from'axios'
import Input from './Input/Input'
import './AddWarehouse.scss'

export default class AddWarehouse extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            address:'',
            city: '',
            country: '',
            contact: {
              name: '',
              position: '',
              phone: '',
              email: ''
            }
        }
    }

    handleDetailChange(e){
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })

        console.log(this.state[e.target.name]);
    }

    handleContactChange(e){
        this.setState({
            ...this.state,
            contact: {
                ...this.state.contact,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit(e){
        e.preventDefault()
    }

    isEmpty(name, contact){
        let empty
        if(!contact) !this.state[name]? empty = true : empty = false
        if(contact)  !this.state.contact[name]? empty = true : empty = false
        return empty
    }

    render() {
        return (
            <div className = 'form titilliumWeb-Regular'>
                <div className="form__header">
                    <img src={arrow} className = 'form__back-arrow' alt=""/> 
                    <h1 className="form__heading">Add New Warehouse</h1>                    
                </div>

                <div className="flex-container">
                    <div className="form__left-section">
                        <h2 className="form__subheading">Warehouse Details</h2>
                        <Input name='name'    text='Warehouse Name' empty={this.isEmpty('name')} handleChange={(e)=>this.handleDetailChange(e)}/>
                        <Input name='address' text='Street Address' empty={this.isEmpty('address')} handleChange={(e)=>this.handleDetailChange(e)}/>
                        <Input name='city'    text='City' empty={this.isEmpty('city')} handleChange={(e)=>this.handleDetailChange(e)}/>
                        <Input name='country' text='Country' empty={this.isEmpty('country')} handleChange={(e)=>this.handleDetailChange(e)}/>
                    </div>

                    <div className="form__right-section">
                    <h2 className="form__subheading">Contact</h2>
                        <Input name='name' text='Contact Name' empty={this.isEmpty('name', true)} handleChange={(e)=>this.handleContactChange(e)} />
                        <Input name='position' text='Position' empty={this.isEmpty('position', true)} handleChange={(e)=>this.handleContactChange(e)} />
                        <Input name='phone' text='Phone number' empty={this.isEmpty('phone', true)} handleChange={(e)=>this.handleContactChange(e)} />
                        <Input name='email' text='Email' empty={this.isEmpty('email', true)} handleChange={(e)=>this.handleContactChange(e)} />
                    </div>

                </div>

                <div className="form__button-container">
                    <button className="form__button">Cancel</button>
                    <button className="form__button"><img src={add} className='plus-icon'/> Add Warehouse</button>
                </div>
            </div>
        )
    }
}
