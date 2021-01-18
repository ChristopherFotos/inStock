import React from 'react'

import InventoryListCard from '../InventoryListCard/InventoryListCard'

function CardList({items, showModal}) {

    let renderList = (listToRender) => {
        console.log(`# OF ITEMS TO RENDER: ${listToRender.length}`);
        return (listToRender.map(item =>
                // console.log(`EACH ITEM INFO: ${item}`)
                <InventoryListCard showModal={showModal} item={item} isWHList={false} key={item.id} id={item.id}/>
            )
        )
    }
    return renderList(items);
}

export default CardList