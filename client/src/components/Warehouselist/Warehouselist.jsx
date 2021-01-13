import React from 'react'
import './Warehouselist.scss'
import {Link} from 'react-router-dom'

function Warehouselist() {
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
    </div>
  )
}

export default Warehouselist
