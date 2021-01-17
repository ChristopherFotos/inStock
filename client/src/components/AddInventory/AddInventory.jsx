import React, { Component } from 'react'
import arrow from '../../assets/images/Icons/arrow_back-24px.svg'
import add from '../../assets/images/Icons/add.svg'
import helpers from '../../helper-functions'
import axios from'axios'
import Input from '../Input/Input'
import '../styles/form.scss'

export default class AddInventory extends Component {
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
            quantity: '',
            color: ''
        }
    }

    onRadioChange = (e) => {
        this.setState({
          color: e.target.value
        });
      }

    handleDetailChange(e){
        this.setState({
            ...this.state,
            [e.target.itemName]: e.target.value
        })
    }

    handleContactChange(e){
        this.setState({
            ...this.state,
            contact: {
                ...this.state.contact,
                [e.target.itemName]: e.target.value
            }
        })

    }

    handleSubmit(){
        if(helpers.validateProperties(this.state).length > 0) return 
        axios.post('http://localhost:8080/inventories', this.state)
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
                    <h1 className="form__heading">Add New Inventory Item</h1>                    
                </div>

                <div className="flex-container">
                    <div className="form__left-section">
                        <h2 className="form__subheading">Item Details</h2>

                        <Input 
                            value = {this.state.name}
                            name='name'    
                            text='Item Name' 
                            empty={this.isEmpty('name')} 
                            handleChange={(e)=>this.handleDetailChange(e)}
                        />
                        
                        <Input 
                            value = {this.state.description}
                            name='description' 
                            text='Description' 
                            empty={this.isEmpty('description')} 
                            handleChange={(e)=>this.handleDetailChange(e)}
                        /> 
                        
                            <DropdownMultiple
                            searchable={['Search for category', 'No matching category']}
                            value = {this.state.category}
                            title="Please select"
                            name='category' 
                            empty={this.isEmpty('category')}
                            list={this.state.category}
                            toggleItem={this.toggleItem}
                            handleChange={(e)=>this.handleDetailChange(e)}
                          />

                        {/* <select
                            value = {this.state.category}
                            title="Please select"
                            name='category' 
                            empty={this.isEmpty('category')}
                            list={this.state.category}
                            toggleItem={this.toggleItem}
                            handleChange={(e)=>this.handleDetailChange(e)}
                          />
                          <option value="electronics">Electronics</option>
                          <option value="gear">Gear</option>
                          <option value="apparel">Apparel</option>
                          <option value="accessories">Accessories</option>
                          <option value="health">Health</option>
                          </select> */}
                        
                    </div>
                

                    <div className="form__right-section">
                    <h2 className="form__subheading">Item Availability</h2>
                        <Input 
                            value = {this.state.contact.name}
                            name='name' 
                            text='Contact Name' 
                            empty={this.isEmpty('name', true)} 
                            handleChange={(e)=>this.handleContactChange(e)} 
                        />

                        <input type="radio"  
                            value = {this.state.contact.status}
                            name='status' 
                            text='Status' 
                            empty={this.isEmpty('status', true)} 
                            checked={this.state.color === "$blue"}
                            handleChange={(e)=>this.onRadioChange(e)} 
                        />
                        <Input 
                            value = {this.state.contact.quantity}
                            name='quantity' 
                            text='Quantity' 
                            empty={this.isEmpty('quantity', true)} 
                            handleChange={(e)=>this.handleContactChange(e)} 
                        />
                        <DropdownMultiple
                            searchable={['Search for warehouse', 'No matching warehouse']}
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
                        Add Inventory
                    </button>
                </div>
            </div>
        )
    }
}
