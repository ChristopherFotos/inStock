import React, { Component } from 'react'
import arrow from '../../assets/images/Icons/arrow_back-24px.svg'
import add from '../../assets/images/Icons/add.svg'
import helpers from '../../helper-functions'
import DescriptionInput from '../DescriptionInput/DescriptionInput'
import Dropdown from '../Dropdown/Dropdown'
import RadioInput from '../RadioInput/RadioInput'
import axios from'axios'
import Input from '../Input/Input'
import '../styles/form.scss'



export default class AddInventory extends Component {
    constructor(props){
        super(props)
        this.state = {
            item: {
                id: '',
                warehouseID: '',
                warehouseName: '',
                itemName: '',
                description: '',
                category: '',
                status: 'In Stock',
                quantity: '',
            },
            warehouseList: []
        }
    }
    componentDidMount(){
        // let id = this.props.match.params.id
        // axios.get(`http://localhost:8080/inventories/${id}`)
        //     .then(res => {
        //         this.setState(res.data)
        //     })

        axios.get('http://localhost:8080/warehouses')
            .then(res => {
                this.state.warehouseList = res.data.map(w => w.name)
                console.log(this.state.warehouseList);
            })
    }

    onRadioChange = (e) => {
        console.log('grdagfdshfds');
        this.setState({
            ...this.state,
          status: e.target.value
        });
      }

    handleDetailChange(e){    
        this.setState({
            ...this.state,
            item:{
                ...this.state.item,
                [e.target.name]: e.target.value
            }
            
        })
        console.log(this.state.item[e.target.name]);
    }

    handleSubmit(){
        if(helpers.validateProperties(this.state).length > 0) return 
        axios.post('http://localhost:8080/inventories', this.state)
            .then(res=>this.props.history.push(`/inventory/${res.data.id}`))
    }

    isEmpty(name){
        let empty
        !this.state.item[name]? empty = true : empty = false
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
                            value = {this.state.item.itemName}
                            name='itemName'                             
                            text='Item Name' 
                            empty={this.isEmpty('itemName')}
                            handleChange={(e)=>this.handleDetailChange(e)}
                        />
                        
                        <DescriptionInput
                            value = {this.state.item.description}
                            name='description' 
                            text='Description'     
                            empty={this.isEmpty('description')}
                            handleChange = {this.handleDetailChange}                       
                            handleChange={(e)=>this.handleDetailChange(e)}
                        />           

                        <Dropdown 
                            handleChange={e=>this.handleDetailChange(e)}
                            title = 'Category'
                            name = 'category'
                            options={
                                ['','Electronics', 'Gear', 'Accessories', 'Health', 'Apparel']
                            }
                            empty = {this.isEmpty('category')}
                        />

                    </div>
                

                    <div className="form__right-section">
                    <h2 className="form__subheading">Item Availability</h2>
                        <p className="form__label">Status</p>
                        <RadioInput status={this.state.item.status} handleChange={e=>this.onRadioChange(e)}/>

                        {this.state.item.status === 'In Stock' && <Input 
                            value = {this.state.item.quantity}
                            name='quantity' 
                            text='Quantity'
                            type='number' 
                            empty={this.isEmpty('quantity')}
                            handleChange={(e)=>this.handleDetailChange(e)} 
                        />}

                            <Dropdown 
                            handleChange={e=>this.handleDetailChange(e)}
                            title = 'Warehouse'
                            name = 'warehouseName'
                            options={
                                ['', ...this.state.warehouseList]
                            }
                            empty = {this.isEmpty('category')}
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
