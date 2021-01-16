import React from 'react';
import './Cardlist.scss';
import Delete from '../../assets/images/Icons/delete_outline-24px.svg';
import edit from '../../assets/images/Icons/edit-24px.svg';
import chevron from '../../assets/images/Icons/chevron_right-24px.svg';
import {Link} from 'react-router-dom'

function Cardlist({warehouses}) {
  let {name, address, city, country} = warehouses;

  return (
    <div>
      <section className="list">
        <div className='list__border'>
          <div className="list__square">
            <h4 className="list__square-header">WAREHOUSE</h4>
            <div className="list__square-container">
              <Link to='/warehouse/:id'><p className='list__square-location'>{name}
              <img className='list__square-chevy' src={chevron} alt="right chevron"/>
              </p>
              </Link>
            </div>
            
            <h4 className="list__square-header">ADDRESS</h4>
            <p className="list__square-text list__square-text-address"> {address}, {city}, {country}</p>
          
          </div>
          
          
          <div className="list__square">
            <div>
              <h4 className="list__square-header">CONTACT NAME</h4>
              <p className="list__square-text list__square-text-name">{warehouses.contact.name}</p>
            </div>
            <div>
              <h4 className="list__square-header">CONTACT INFORMATION</h4>
              <p className="list__square-text list__square-text-info"> {warehouses.contact.phone} {warehouses.contact.email}</p>
            </div>
          </div>
        </div>
        
        <div className="list__square-buttons">
          <Link to=''><img className="list__square-push" src={Delete} alt="delete icon"/></Link>
          <Link to=''><img src={edit} alt="edit icon"/></Link>
        </div>
      </section>
    </div>
  )
}

export default Cardlist
