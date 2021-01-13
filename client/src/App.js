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
    <Header/>
    <Route path="/" exact component={Warehouselist}/>
    </div>
    </Router>
   
  );
}
}

export default App;
