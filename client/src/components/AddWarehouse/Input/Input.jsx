import warning from '../../../assets/images/Icons/error-24px.svg'
import React, { Component } from 'react'

export default class Input extends Component {
    constructor(props){
        super(props)
        this.state = {
            empty: props.empty ? 'form__input--empty' : '',
            invalid: false,
        }

        this.validators = {
            phone: function(string){
                let re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
                return re.test(string)
            },

            email: function(string) {
                const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(String(string).toLowerCase());
            }

        }
    }

    handleChange(e){

        this.props.handleChange(e)

        if(
        this.validators[this.props.name] &&  
        !this.validators[this.props.name](e.target.value) && 
        !this.props.empty
        ){
            this.setState({
                ...this.state,
                invalidEmail: true
            })
        } 

        if(
        this.validators[this.props.name] && 
        this.validators[this.props.name](e.target.value) && 
        !this.props.empty
        ){
            this.setState({
                ...this.state,
                invalidEmail: false
            })
        } 
    }

    render() {
        return (
            <div className="form__input-wrapper">
                {this.props.empty}
                <label htmlFor={this.props.name} className="form__label">{this.props.text}</label>
                <input onChange={(e)=>{this.handleChange(e)}} name={this.props.name} type="text" className={`form__input ${this.props.empty ? 'form__input--empty' : ''}`}/>
                {(this.props.empty || this.state.invalidEmail) && 
                    <span className="form__validation-span">
                        <img src={warning} alt="" className="form__warning"/>
                        {this.state.invalidEmail ? `Please provide a valid ${this.props.name}` : 'This field is required'}
                    </span>
                }
            </div>
        )
    }
}
