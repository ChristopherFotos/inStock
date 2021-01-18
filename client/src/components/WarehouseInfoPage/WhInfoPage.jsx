import React, { Component } from 'react'
import InvCardList from '../InvCardList/InvCardList';
import WarehouseItemList from '../WarehouseItemList/WarehouseItemList';

import SortButtons from '../SortButtons/SortButtons';

export class WhInfoPage extends Component {
    render() {
        return (
            <div>
                {/* <InventoryList /> */}
                <div className="info">
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
                <WarehouseItemList />
            </div>
        )
    }
}

export default WhInfoPage
