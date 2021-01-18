import React, { Component } from 'react'
import './inventoryList.scss'
import axios from 'axios';
import WarehouseDetails from '../WarehouseDetails/WarehouseDetails'
import SortButtons from '../SortButtons/SortButtons';
import InvCardList from '../InvCardList/InvCardList';

export class InventoryList extends Component {
    constructor() {
        super();
        this.state = {
            items: [],
        }
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

                <InvCardList items={this.state.items} />
            </div>
        )
    }
}

export default InventoryList
