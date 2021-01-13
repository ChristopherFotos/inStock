import logo from './logo.svg';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
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
  );
}

export default App;
