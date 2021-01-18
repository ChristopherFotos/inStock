import React from 'react';
import logo from '../../assets/images/Logo/InStock-Logo_1x.png';
import {Link} from 'react-router-dom';
import './Header.scss';

function Header() {
  return (
    <div>
      <nav>
        <div className="navbar">
          <div className="navbar__image">
            <Link to='/'>
              <img src={logo} alt="Instock site logo"/>
            </Link>
          </div>
            <div className="navbar__container">
              <Link to='/'><h3 className="navbar__container-active" >Warehouses</h3></Link>
              <Link to='/inventory'><h3 className="navbar__container-link">Inventory</h3></Link>
            </div>
        </div>
      </nav>
    </div>
  )
};

export default Header
