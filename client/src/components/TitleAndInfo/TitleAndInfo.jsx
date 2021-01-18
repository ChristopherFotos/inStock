import React from 'react';
import './TitleAndInfo.scss';
import { Link } from 'react-router-dom';

import SelectArrow from '../../assets/images/Icons/chevron_right-24px.svg';

function TitleAndInfo({ title, info, isLink, status, mobileOnly, wideInfo, showMobile}) {
    if(showMobile){
       return (
        <div className="ti-container smol">
            <h4 className="ti-container__title">{title}</h4>
            <h4 className="ti-container__content align-left">{info}</h4>
        </div>
       ) 
    }

    if(wideInfo){
        return (
         <div className="ti-container wide">
             <h4 className="ti-container__title">{title}</h4>
             <h4 className="ti-container__content align-left">{info}</h4>
         </div>
        ) 
     }

    if(mobileOnly){
       return (
        <div className="ti-container  mobile-only">
            <h4 className="ti-container__title">{title}</h4>
            <h4 className="ti-container__content">{info}</h4>
        </div>
       )
       
    }
    if (isLink) {
        return (
            <div className="ti-container">
                <h4 className="ti-container__title mobile-only">{title}</h4>
                    <Link to="/inventory">
                        <h4 className="ti-container__content">{info}</h4>
                        <img src={SelectArrow} alt="" />
                    </Link>
            </div>
        )
    } else if (status && status != null) {
        let statusText = "IN STOCK";
        return (
            <div className="ti-container">
                <h4 className="ti-container__title mobile-only">{title}</h4>
                <div className="ti-container__instock">
                    <h4 className="ti-container__instock--text">{statusText}</h4>
                </div>
            </div>
        )
    } else if (!status && status != null) {
        let statusText = "OUT OF STOCK";
        return (
            <div className="ti-container">
                <h4 className="ti-container__title mobile-only">{title}</h4>
                <div className="ti-container__outstock">
                    <h4 className="ti-container__outstock--text">{statusText}</h4>
                </div>
            </div>
        )
    } else {
        return (
            <div className="ti-container">
                <h4 className="ti-container__title mobile-only">{title}</h4>
                <h4 className="ti-container__content">{info}</h4>
            </div>
        )
    }
}

export default TitleAndInfo
