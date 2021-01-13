import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Warehouselist from './components/Warehouselist/Warehouselist';

class App extends React.Component {
  
  render(){
  return (
    <Router>
    <div className="App">
        <Router>
          <Switch>
            <Route path="/">
              <Redirect to="/warehouses"/> //redirects the user to the warehouses list
            </Route>
            <Route path="/warehouses" /> //displays a list of warehouses
            <Route path="/inventory" /> //displays a list of inventory
            <Route path="/warehouse/:id" /> //displays information on a specific warehouse
            <Route path="/warehouse/:id/inventory" /> //displays a list of a specific warehouse's inventory
            <Route path="/warehouse/:id/inventory/:itemid" /> //displays a specific item info in a specific warehouse
          </Switch>
        </Router>

    </div>
    </Router>
   
  );
}
}

export default App;
