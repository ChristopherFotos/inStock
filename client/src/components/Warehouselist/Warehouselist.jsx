import React from 'react'
import './Warehouselist.scss'
import {Link} from 'react-router-dom'
import sort from '../../assets/images/Icons/sort-24px.svg';
import chevron from '../../assets/images/Icons/chevron_right-24px.svg';
import Delete from '../../assets/images/Icons/delete_outline-24px.svg';
import edit from '../../assets/images/Icons/edit-24px.svg';



class Warehouselist extends React.Component {



  render(){
  return (
    <div className="card">
      <header className="head">
        <div className="head__box">
          <h1 className="head__box-main">Warehouses</h1>
          <div className="head__container">
            <input className="head__container-search" type="text" placeholder="Search..."/>
            <Link to="/addnewwarehouse">
              <button className="head__container-click"> + Add New Warehouse </button>
            </Link>
          </div>
          
        </div>
       
      </header>

      <div className="column">
      <h4 className="column__text--shift">WAREHOUSE <img className="column__text-sort" src={sort}alt=""/></h4>
      <h4 className="column__text">ADDRESS<img className="column__text-sort" src={sort} alt=""/></h4>
      <h4 className="column__text">CONTACT NAME<img className="column__text-sort" src={sort} alt=""/></h4>
      <h4 className="column__text">CONTACT INFORMATION<img className="column__text-sort" src={sort} alt=""/></h4>
      <h4 className="column__text--push">ACTIONS</h4>
    </div>
      <section className="list">
        <div className='list__border'>
          <div className="list__square">
            <h4 className="list__square-header">WAREHOUSE</h4>
            <div className="list__square-container">
              <Link to='/warehouse/:id'><p className='list__square-location'>Manhattan
              <img className='list__square-chevy' src={chevron} alt="right chevron"/>
              </p>
              </Link>
            </div>
            
            <h4 className="list__square-header">ADDRESS</h4>
            <p className="list__square-text list__square-text-address"> 503 Broadway, New York, USA</p>
          
          </div>
          
          
          <div className="list__square">
            <div>
              <h4 className="list__square-header">CONTACT NAME</h4>
              <p className="list__square-text list__square-text-name"> Parmin Aujla</p>
            </div>
            <div>
              <h4 className="list__square-header">CONTACT INFORMATION</h4>
              <p className="list__square-text list__square-text-info"> +1(629)555-0129 paujla@instock.com</p>
              
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
}}

export default Warehouselist
