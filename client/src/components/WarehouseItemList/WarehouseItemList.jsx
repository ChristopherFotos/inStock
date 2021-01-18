import React, { Component } from 'react'
import InventoryListCard from '../InventoryListCard/InventoryListCard'
import axios from 'axios';

export class WarehouseItemList extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: [],
        }
    }

    componentDidMount() {
        console.log("WAREHOUSE ID: " + this.props.wareID);

        //DELETE ME ONCE YOU BRING IN THE WAREHOUSE STUFF
        axios.get(`http://localhost:8080/inventory/warehouse/${this.props.wareID}`)
        .then((res) => {
            this.setState({
                items: res.data,
            });
        })
    }

    renderList = (listToRender) => {

        return (listToRender.map(item =>
                // console.log(`EACH ITEM INFO: ${item}`)
                <InventoryListCard item={item} isWHList={true} key={item.id} itemId = {item.id}/>
            )
        )
    }

    render() {
        return (
            <>
            {this.renderList(this.state.items)}
            </>
        )
    }
}

export default WarehouseItemList
