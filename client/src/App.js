import React from 'react';
// import icon from './assets/icons8-linkedin.svg';
import Navigation from './components/Navigation/Navigation.js'
import Home from './pages/Home/Home.js';
import MyPlants from './pages/MyPlants/MyPlants.js';
// import Footer from './components/Footer/Footer.js';
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
       
        
      </BrowserRouter>
      
    </>

  ); 
}

export default App;
