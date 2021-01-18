import React, { Component } from 'react'
import './InventoryItem.scss';
import axios from 'axios';

import ItemHeader from '../ItemHeader/ItemHeader';
import ItemDetails from '../ItemDetails/ItemDetails';


export class InventoryItem extends Component {
    constructor(routerData){
        super(routerData);
        console.log("PROPS+ " + routerData.match.params.id);
        this.state = {
            item: "null",
        }
    }
    componentDidMount() {
        let curItem;
        // axios
        //     .get('http://localhost:8080/inventory/:id')
        //     .then(res => console.log("RESULTS" + res))
        this.setState({
            item: "Television",
        });
    }

    backButton = () => {

    }
    
    render() {
        return (
            <>
            <ItemHeader item={this.state.item}/>
            <ItemDetails />
            </>
        )
    }
}

export default InventoryItem

