import React, { Component } from 'react'
import './inventoryList.scss'
import axios from 'axios';

import SortButtons from '../SortButtons/SortButtons';
import CardList from '../CardList/CardList';

export class InventoryList extends Component {
    constructor() {
        super();
        this.state = {
            items: [item1, item2, item3],
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
            <div className="list">
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

                {/* <InventoryListCard item={item1} />
                <InventoryListCard item={item2} />
                <InventoryListCard item={item3} /> */}
                <CardList items={this.state.items} />
            </div>
        )
    }
}

export default InventoryList
