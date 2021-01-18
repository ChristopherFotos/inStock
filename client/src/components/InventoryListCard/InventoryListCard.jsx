import React from 'react'
import './InventoryListCard.scss'

import TitleAndInfo from '../TitleAndInfo/TitleAndInfo';
import ActionIcon from '../ActionIcon/ActionIcon';

function InventoryListCard({item, isWHList, itemName, id, showModal}) {
    // console.log(`showModal: ${showModal}`);
    // let {itemName, id} = props.items
    let status;
    if(item.quantity > 0){
        status = true;
    }else{
        status = false;
    }

    let editButton = () => {
        console.log(`EDIT BUTTON PRESSED ON ${item.id}`);
        //connect item edit backend here
    }
    let deleteButton = () => {
        console.log(`DELETE BUTTON PRESSED ON ${item.name}`);
        //connect item delete backend here
    }

    if(isWHList){
        // console.log("WAREHOUSE LIST");
        return (
            <div className="info-card raise">
                <TitleAndInfo title={"INVENTORY ITEM"} info={item.itemName} isLink={true} />
                <TitleAndInfo title={"CATEGORY"} info={item.category} />
                <TitleAndInfo title={"STATUS"} info={"status"} status={status} />
                <TitleAndInfo title={"QTY"} info={item.quantity} />
                <TitleAndInfo mobileOnly={true} title={null} info={null} />
    
                <div className="info-card__icons">
                    <ActionIcon type={"delete"} clickAction={deleteButton} />
                    <ActionIcon type={"edit"} clickAction={editButton} />
                </div>
            </div>
        )
    }else if(!isWHList){
        // console.log("NOT WAREHOUSE LIST");
        return (
            <div className="info-card">
                <TitleAndInfo title={"INVENTORY ITEM"} info={item.itemName} isLink={true} />
                <TitleAndInfo title={"CATEGORY"} info={item.category} />
                <TitleAndInfo title={"STATUS"} info={"status"} status={status} />
                <TitleAndInfo title={"QTY"} info={item.quantity} />
                <TitleAndInfo mobileOnly={true} title={null} info={null} />
                <TitleAndInfo title={"WAREHOUSE"}info={item.warehouseName} />
    
                <div className="info-card__icons">
                    <ActionIcon type={"delete"} itemName={item.itemName} itemId={item.id} clickAction={showModal} />
                    <ActionIcon type={"edit"} clickAction={editButton} />
                </div>
            </div>
        )
    }
}

export default InventoryListCard
