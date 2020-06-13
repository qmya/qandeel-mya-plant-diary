import React from 'react';
import icon from './assets/icons8-linkedin.svg';
import Navigation from './components/Navigation/Navigation.js'
import Home from './pages/Home/Home.js';
import MyPlants from './pages/MyPlants/MyPlants.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation/>
        <Switch>
        <Route path='/' exact component ={Home} />;
        <Route path='/myplants' component = {MyPlants}/>
        </Switch>
        <div className="footer">
         <h5>Qandeel Labs</h5>
         <img className="icon" src={icon} alt ="linkedIn icon"/>
        </div>
      </BrowserRouter>
    </>

  ); 
}

export default App;
