import React, { Component } from 'react'
import './inventoryList.scss'
import axios from 'axios';
import ModalInvList from '../Modal/ModalInvList';
import WarehouseDetails from '../WarehouseDetails/WarehouseDetails'
import SortButtons from '../SortButtons/SortButtons';
import InvCardList from '../InvCardList/InvCardList';

export class InventoryList extends Component {
    constructor() {
        super();
        this.state = {
            items: [],
            show: false
        }
    }

    showModal = e => {
        console.log("PRESSED");
        
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
        show: false,
  })
}
    

    componentDidMount() {
        axios.get('http://localhost:8080/inventory')
        .then((res) => {
            console.log(res.data);
            this.setState({
                items: res.data,
            });
        })
    }

    getInventoryList = () => {
    axios.get ('http://localhost:8080/inventory')
    .then(res => {
    this.setState({items: res.data, show: false})
  })
}


    render() {
        return (
            <div className="info">
                <div className="info-header">
                    <h1 className="info-header__title">INVENTORY</h1>
                    <form className="info-header__form" id="inv-serach">
                        <input className="info-header__form__input" type="text" placeholder="Search..." name="Search" />
                        <button className="info-header__form__submit-bttn" type="submit" form="inv-search">+Add New Item</button>
                    </form>
                </div>
                <div className="table-titles">

                    <div className="table-titles__header">
                        <h4>INVENTORY ITEM</h4>
                        <div className="table-titles__header__sort">
                            <SortButtons />
                        </div>
                    </div>
                    <div className="table-titles__header">
                        <h4>CATEGORY</h4>
                        <div className="table-titles__header__sort">
                            <SortButtons />
                        </div>
                    </div>
                    <div className="table-titles__header">
                        <h4>STATUS</h4>
                        <div className="table-titles__header__sort">
                            <SortButtons />
                        </div>
                    </div>
                    <div className="table-titles__header">
                        <h4>QTY</h4>
                        <div className="table-titles__header__sort">
                            <SortButtons />
                        </div>
                    </div>
                    <div className="table-titles__header">
                        <h4>WAREHOUSE</h4>
                        <div className="table-titles__header__sort">
                            <SortButtons />
                        </div>
                    </div>
                    <div className="table-titles__header">
                        <h4>ACTIONS</h4>
                        <div className="table-titles__header__sort">
                            <SortButtons />
                        </div>
                    </div>
                </div>
    
            <InvCardList  showModal={(e) => this.showModal(e)} items={this.state.items} />
            {this.state.show && <ModalInvList name={this.state.modalName} id={this.state.modalId} show={this.state.show} close={() => this.closeModal()} makeRequest={() => this.getInventoryList()}/>}
            </div>
        )
    }
}

export default InventoryList
