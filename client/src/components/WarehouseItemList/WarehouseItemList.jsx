import React, { Component } from 'react'
import InventoryListCard from '../InventoryListCard/InventoryListCard'
import axios from 'axios';

export class WarehouseItemList extends Component {
    constructor(){
        super();
        this.state = {
            items: [],
        }
    }

    componentDidMount() {

        //DELETE ME ONCE YOU BRING IN THE WAREHOUSE STUFF
        axios.get('http://localhost:8080/inventory')
        .then((res) => {
            // console.log(res.data);
            this.setState({
                items: res.data,
            });
        })
    }

    renderList = (listToRender) => {
        console.log(`# OF ITEMS TO RENDER: ${listToRender.length}`);
        return (listToRender.map(item =>
                // console.log(`EACH ITEM INFO: ${item}`)
                <InventoryListCard item={item} isWHList={true} key={item.id} />
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
