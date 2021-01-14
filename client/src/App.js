import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import React from 'react';
import AddWarehouse from './components/AddWarehouse/AddWarehouse'
import EditWarehouse from './components/EditWarehouse/EditWarehouse'
import './App.css';
import Header from './components/Header/Header';
import Warehouselist from './components/Warehouselist/Warehouselist';

class App extends React.Component {
  
  render(){
  return (
    <Router>
       <div>
            <Switch>
              <Route path="/" exact>
                <Redirect to="/warehouses"/> //redirects the user to the warehouses list
              </Route>
              <Route path="/warehouses" exact /> //displays a list of warehouses
              <Route path="/warehouses/add" component={AddWarehouse}/> //displays a list of warehouses
              <Route path="/inventory" /> //displays a list of inventory
              <Route path="/warehouse/:id" exact/> //displays information on a specific warehouse
              <Route path="/warehouse/:id/edit" component={EditWarehouse}/> //displays the form to edit a particular warehouse
              <Route path="/warehouse/:id/inventory" /> //displays a list of a specific warehouse's inventory
              <Route path="/warehouse/:id/inventory/:itemid" /> //displays a specific item info in a specific warehouse
            </Switch>
      </div>
    </Router>

  );
}
}

export default App;
