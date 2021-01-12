import React from 'react'
import logo from '../../assets/images/Logo/InStock-Logo_1x.png';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <div>
    <Header>
    <div>
    <img src={logo} alt="Instock site logo"/>
    <Link to='/warehouses'>Warehouses</Link>
    <Link to='/inventory'>Inventory</Link>
    <p>Put something on the damn page</p>
    
    </div>
    </Header>  
    </div>
  )
}

export default Header
