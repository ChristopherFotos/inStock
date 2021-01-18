import React from 'react'
import './WarehouseDetails.scss'
import {Link} from 'react-router-dom'
import arrow from '../../assets/images/Icons/arrow_back-24px.svg'
import edit from '../../assets/images/Icons/edit-white.svg'

export default function WarehouseDetails(props) {
    console.log(props);
    return (
        <div className = 'warehouse-details'>

            <div className="warehouse-details__header">
                <div className="warehouse-details__left">
                    <Link to = '/'>
                        <img src={arrow} className = 'form__back-arrow' alt=""/>
                    </Link> 
                    <h1 className="form__heading">{props.warehouse.name}</h1>
                </div>
                
                <Link to={`/warehouse/${props.warehouse.id}/edit`}>
                <button className="warehouse-details__button">
                    <img src={edit} className='edit-icon'/>
                    <p className="warehouse-details__button-text">Edit</p>
                </button>        
                </Link>
            </div>
            <div className="wrapper">
            <div className="warehouse-details__body">
                <div className="warehouse-details__address">
                    <h4 className="warehouse-details__subheading">WAREHOUSE ADDRESS:</h4>
                    <p className="warehouse-details__p">{props.warehouse.address}</p>
                    <p className="warehouse-details__p">{props.warehouse.city}, {props.warehouse.country}</p>
                </div>

                <div className="warehouse-details__contact">
                    <div className="warehouse-details__contact-name">
                        <h4 className="warehouse-details__subheading">CONTACT NAME: </h4>
                        <p className="warehouse-details__p">{props.warehouse.contact.name}</p>
                        <p className="warehouse-details__p">{props.warehouse.contact.position}</p>
                    </div>
                    <div className="warehouse-details__contact-info">
                        <h4 className="warehouse-details__subheading">CONTACT INFORMATION:</h4>
                        <p className="warehouse-details__p">{props.warehouse.contact.phone}</p>
                        <p className="warehouse-details__p">{props.warehouse.contact.email}</p>
                    </div>
                </div>

            </div>
            </div>

        </div>
    )
}
