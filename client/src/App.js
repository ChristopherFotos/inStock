import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import AddWarehouse from './components/AddWarehouse/AddWarehouse'
import EditWarehouse from './components/EditWarehouse/EditWarehouse'
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Warehouselist from './components/Warehouselist/Warehouselist';
import InventoryList from './components/InventoryList/InventoryList'
import EditInventory from './components/EditInventory/EditInventory'
import AddInventory from './components/AddInventory/AddInventory'
import WarehouseDetails from './components/WarehouseDetails/WarehouseDetails'
import WhInfoPage from '../src/components/WarehouseInfoPage/WhInfoPage'


class App extends React.Component {
  
  render(){
  return (
    <Router>
    <div className="App">
          <Header/>
            <Switch>
              <Route path='/' exact render={(routerProps) => <Warehouselist {...routerProps}/>}/>            
              <Route path="/warehouses" exact/> //displays a list of warehouses
              <Route path="/warehouses/add" component={AddWarehouse}/> //displays a list of warehouses
              <Route path="/inventory" exact component={InventoryList} />
              <Route path="/inventory/add" component={AddInventory} />
              <Route path="/warehouse/:id" exact component={WarehouseDetails}/> //displays information on a specific warehouse
              <Route path="/warehouse/:id/edit" component={EditWarehouse}/> //displays the form to edit a particular warehouse

              <Route path="/test" component={WhInfoPage} /> //displays a list of a specific warehouse's inventory

              <Route path="/warehouse/:id/inventory" /> //displays a list of a specific warehouse's inventory
              <Route path="/warehouse/:id/inventory/:itemid" /> //displays a specific item info in a specific warehouse
            </Switch>
          <Footer/>
    </div>
    </Router>

  );
}
}

export default App;
