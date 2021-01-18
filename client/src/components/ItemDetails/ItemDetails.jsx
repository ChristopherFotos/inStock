import React, { Component } from 'react'
import './ItemDetails.scss';
import ItemHeader from '../ItemHeader/ItemHeader';
import TitleAndInfo from '../TitleAndInfo/TitleAndInfo';
import axios from 'axios';

export class ItemDetails extends Component {
    constructor() {
        super();
        this.state = {
            curItem: null,
        }
    }

    componentDidMount() {
        console.log("Comp Mounted")
        // axios
        //     .get('/warehouse/:id/inventory/:id')
        //     .then((res)=>{
        //         console.log
        //     })
    }

    render() {
        return (
            <div className="details-page">
                <ItemHeader item={"null"} />
                <div className="info-card info">
                    <div className="title-group">
                        <TitleAndInfo title={"ITEM DESCRIPTION"} wideInfo={true} info={"This is a item"} isLink={false} />
                        <TitleAndInfo title={"CATEGORY"} wideInfo={true} info={"item"} />
                    </div>
                    <div className="title-group">
                        <TitleAndInfo title={"STATUS"} showMobile={true} info={"status"} status={true} />
                        <TitleAndInfo title={"QUANTITY"} showMobile={true} info={"item"} />
                        <TitleAndInfo title={"WAREHOUSE"} wideInfo={true} info={"item"} />
                    </div>
                </div>
            </div>
        )
    }
}

export default ItemDetails

