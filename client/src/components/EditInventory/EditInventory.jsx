import React, { Component } from 'react'
import arrow from '../../assets/images/Icons/arrow_back-24px.svg'
import add from '../../assets/images/Icons/add.svg'
import helpers from '../../helper-functions'
import axios from'axios'
import Input from '../Input/Input'
import './EditInventory.scss'
import '../EditWarehouse/EditWarehouse.scss'
import '../styles/form.scss'

export default class EditInventory extends Component {
    constructor(props){
        super(props)
        this.state = {
            id: '',
            warehouseID: '',
            warehouseName: '',
            itemName: '',
            description: '',
            category: '',
            status: '',
            quantity: ''
        }
    }

    //copy updates from Add inventory formatting

    componentDidMount(){
        let id = this.props.match.params.id
        axios.get(`http://localhost:8080/inventories/${id}`)
            .then(res => {
                this.setState(res.data)
            })
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
            contact: {
                ...this.state.contact,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit(){
        let id = this.props.match.params.id
        if(helpers.validateProperties(this.state).length > 0) return 
        axios.patch(`http://localhost:8080/inventories/${id}`, this.state)
            .then(res=>this.props.history.push(`/inventory/${res.data.id}`))
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
                    <h1 className="form__heading">Edit Inventory Item</h1>                    
                </div>

                <div className="flex-container">
                    <div className="form__left-section">
                        <h2 className="form__subheading">Item Details</h2>

                        <Input 
                            value = {this.state.itemName}
                            name='itemName'    
                            text='Inventory Name' 
                            empty={this.isEmpty('itemName')} 
                            handleChange={(e)=>this.handleDetailChange(e)}
                        />
                        
                        <Input 
                            value = {this.state.description}
                            name='description' 
                            text='Description' 
                            empty={this.isEmpty('description')} 
                            handleChange={(e)=>this.handleDetailChange(e)}
                        />

                        <Input 
                            value = {this.state.category}
                            name='category'    
                            text='Category' 
                            empty={this.isEmpty('category')} 
                            handleChange={(e)=>this.handleDetailChange(e)}
                        />
                    </div>

                    <div className="form__right-section">
                    <h2 className="form__subheading">Item Availability</h2>
                        <Input 
                            value = {this.state.contact.status}
                            name='status' 
                            text='Status' 
                            empty={this.isEmpty('status', true)} 
                            handleChange={(e)=>this.handleContactChange(e)} 
                        />
                        <Input 
                            value = {this.state.contact.quantity}
                            name='quantity' 
                            text='Quantity' 
                            empty={this.isEmpty('quantity', true)} 
                            handleChange={(e)=>this.handleContactChange(e)} 
                        />

                        <Input 
                            value = {this.state.contact.warehouse}
                            name='warehouse' 
                            text='Warehouse' 
                            empty={this.isEmpty('warehouse', true)} 
                            handleChange={(e)=>this.handleContactChange(e)} 
                        />
                    </div>

                </div>

                <div className="form__button-container">
                    <button className="form__button">
                        Cancel
                    </button>
                    <button className="form__button" 
                        onClick={(e)=>this.handleSubmit(e)}
                    >   
                        <img src={add} className='plus-icon'/> 
                        Add Item
                    </button>
                </div>
            </div>
        )
    }
}
