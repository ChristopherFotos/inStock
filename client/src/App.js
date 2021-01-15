import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Warehouselist from './components/Warehouselist/Warehouselist';

class App extends React.Component {
  
  render(){
  return (
    <Router>
    <div className="App">
          <Header/>
          <Switch>
            <Route path='/' exact render={(routerProps) => <Warehouselist {...routerProps}/>}/>
            <Route path="/warehouses" /> //displays a list of warehouses
            <Route path="/inventory" /> //displays a list of inventory
            <Route path="/warehouse/:id" /> //displays information on a specific warehouse
            <Route path="/warehouse/:id/inventory" /> //displays a list of a specific warehouse's inventory
            <Route path="/warehouse/:id/inventory/:itemid" /> //displays a specific item info in a specific warehouse
          </Switch>
        

    </div>
    </Router>
   
  );
}
}

export default App;
