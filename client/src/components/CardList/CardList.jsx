import React from 'react'

import InventoryListCard from '../InventoryListCard/InventoryListCard'

function CardList({items}) {

    let renderList = (listToRender) => {
        console.log(`# OF ITEMS TO RENDER: ${listToRender.length}`);
        return (listToRender.map(item =>
                // console.log(`EACH ITEM INFO: ${item}`)
                <InventoryListCard item={item} key={item.id} />
            )
        )
    }
    return renderList(items);
}

export default CardList
