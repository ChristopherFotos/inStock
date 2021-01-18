import React, { Component } from 'react'
import InvCardList from '../InvCardList/InvCardList';
import WarehouseItemList from '../WarehouseItemList/WarehouseItemList';
import WarehouseDetails from '../WarehouseDetails/WarehouseDetails'
import SortButtons from '../SortButtons/SortButtons';
import axios from 'axios';

import './WhInfoPage.scss';

class WhInfoPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            "id": "",
            "name": "",
            "address": "",
            "city": "",
            "country": "",
            "contact": {
                "name": "",
                "position": "",
                "phone": "",
                "email": ""
            }
        }
    }


    componentDidMount() {
        let id = this.props.match.params.id;
        console.log('HERE IS THE ID ID DID ID',id);
        axios.get(`http://localhost:8080/warehouses/${id}`)
            .then(res => {
                this.setState(res.data)
            }).catch(err => { console.log(err); })
    }

    render() {
        return (
            <div className="whl-page">
                {/* <InventoryList /> */}
                <WarehouseDetails warehouse={this.state}></WarehouseDetails>
                <div className="info wh-page">
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
                            <h4>ACTIONS</h4>
                            <div className="table-titles__header__sort">
                                <SortButtons />
                            </div>
                        </div>
                    </div>
                </div>
                <WarehouseItemList wareID={this.props.match.params.id} />
            </div>
        )
    }
}

export default WhInfoPage
