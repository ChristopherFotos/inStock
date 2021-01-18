import React from 'react'
import './Warehouselist.scss'
import {Link} from 'react-router-dom'
import sort from '../../assets/images/Icons/sort-24px.svg';
import axios from 'axios';
import Cardlist from '../Cardlist/Cardlist';
import Modal from '../Modal/Modal';
let url = 'http://localhost:8080/warehouses';


class Warehouselist extends React.Component {

state = {
  warehouses:[],
  show: false,  
};

showModal = e => {
  this.setState({
    ...this.state,
    show: !this.state.show,
    modalName: e.target.dataset.name,
    modalId: e.target.dataset.id,
  });
};

closeModal = () => {
  this.setState({
    ...this.state,
    show: false
  })
}

componentDidMount() {
  axios.get(url)
  .then(res => {
    this.setState({warehouses: res.data})
  })
  .catch (err => {
    console.log(err, 'there was an error')
  })
}
 getNewWarehouseList = () => {
  axios.get (url)
  .then(res => {
    this.setState({warehouses: res.data, show: false})
  })
}

  render(){
  return (
    <div className="card">
        <header className="head">
          <div className="head__box">
            <h1 className="head__box-main">Warehouses</h1>
            <div className="head__container">
              <input className="head__container-search" type="text" placeholder="Search..."/>
              <Link to="/warehouses/add">
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
      <div >
        {this.state.warehouses.map ((warehouse) => <Cardlist showModal={(e) => this.showModal(e)}
          key={warehouse.id} warehouses={warehouse}/>)}
      </div>
     {this.state.show && <Modal  name={this.state.modalName} id={this.state.modalId} show={this.state.show} close={() => this.closeModal()} makeRequest={() => this.getNewWarehouseList()}/>}
        
    </div>
  )
}}

export default Warehouselist
