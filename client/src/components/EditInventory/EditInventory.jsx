import React, { Component } from 'react'
import arrow from '../../assets/images/Icons/arrow_back-24px.svg'
import add from '../../assets/images/Icons/add.svg'
import helpers from '../../helper-functions'
import axios from'axios'
import Input from '../Input/Input'

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

    handleChange(e){
        this.setState({
            ...this.state,
            // contact: {
            //     ...this.state.contact,
            //     [e.target.name]: e.target.value
            // }
        })
    }

    handleSubmit(){
        let id = this.props.match.params.id
        if(helpers.validateProperties(this.state).length > 0) return 
        axios.patch(`http://localhost:8080/inventories/${id}`, this.state)
            .then(res=>this.props.history.push(`/inventory/${res.data.id}`))
    }

    // isEmpty(name, contact){
    //     let empty
    //     if(!contact) !this.state[name]? empty = true : empty = false
    //     if(contact)  !this.state.contact[name]? empty = true : empty = false
    //     return empty
    // }

    render() {
        return (
            
            <div>
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
