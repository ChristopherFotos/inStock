import React from 'react'
import './ItemHeader.scss';

import editIcon from '../../assets/images/Icons/edit-white.svg'
import backIcon from '../../assets/images/Icons/arrow_back-24px.svg'

function ItemHeader({item}) {

    return (
        <div className="info">
        <div className="info__header">
            <img src={backIcon} alt="" />
            <h1 className="info__header__title">{item}</h1>
            <button className="info__header__bttn">
                <img src={editIcon} alt="" className="info__header__bttn__icon" />
                <h4 className="info__header__bttn__text no-mobile">Edit</h4>
            </button>
        </div>
    </div>
    )
}

export default ItemHeader
