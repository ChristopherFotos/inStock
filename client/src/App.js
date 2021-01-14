import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import React from 'react';
import './App.css';
import Header from './components/Header/Header';

class App extends React.Component {
  
  render(){
  return (
    <Router>
    <div className="App">
        <Router>
          <Switch>
            <Route path="/">
              <Redirect to="/warehouses"/>
            </Route>
            <Route path="/warehouses" />
            <Route path="/inventory" />
            <Route path="/warehouse/:id" />
            <Route path="/warehouse/:id/inventory" />
            <Route path="/warehouse/:id/inventory/:itemid" />
          </Switch>
        </Router>
    </div>
    </Router>
   
  );
}
}

export default App;
