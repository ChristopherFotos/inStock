import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";



class App extends React.Component {
  
  
  render(){
  return (
    
    <Router>
    <div className="App">
    <Header/>
    </div>
    </Router>
   
  );
}
}

export default App;
