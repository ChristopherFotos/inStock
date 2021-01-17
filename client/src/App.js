import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import React from 'react';
import AddWarehouse from './components/AddWarehouse/AddWarehouse'
import EditWarehouse from './components/EditWarehouse/EditWarehouse'
import './App.scss';
import Header from './components/Header/Header';
import Warehouselist from './components/Warehouselist/Warehouselist';
import InventoryList from './components/InventoryList/InventoryList'

class App extends React.Component {
  
  render(){
  return (
    <Router>
       <div className="app">
            <Switch>
              <Route path="/" exact>
                <Redirect to="/warehouses"/>
              </Route>
              <Route path="/warehouses" exact />
              <Route path="/warehouses/add" component={AddWarehouse}/>
              <Route path="/inventory" component={InventoryList} />
              <Route path="/warehouse/:id" exact/>
              <Route path="/warehouse/:id/edit" component={EditWarehouse}/>
              <Route path="/warehouse/:id/inventory" />
              <Route path="/warehouse/:id/inventory/:itemid" />
            </Switch>
      </div>
    </Router>

  );
}
}

export default App;
