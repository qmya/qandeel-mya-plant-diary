import React from 'react';
import Navigation from './components/Navigation/Navigation.js';
import MainVideo from './components/MainVideo/MainVideo.js';
// import Home from './pages/Home/Home.js';
// import MyPlants from './pages/Myplants/MyPlants.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
     <Navigation/>
     <MainVideo/>
     {/* <Switch>
   <Route path='/' exact component ={Home} />;
       <Route path='/plant' component = {MyPlants}/>
     </Switch> */}
    </BrowserRouter>


  );
}

export default App;
