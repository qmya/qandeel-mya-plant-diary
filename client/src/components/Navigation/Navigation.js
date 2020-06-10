import React from 'react';
import "./Navigation.scss";
// import { NavLink } from 'react-router-dom';
// import Logo from '../../assets/logo/logo-instock.svg';

function Navigation () {
    
    return ( 
        <header>
            {/* <NavLink to="/">
             <img  src ={Logo} alt="logo of the instock site"/>
            </NavLink> */}
            <nav>
                <div>Plant Diary</div>
                <NavLink to= "/MyPlants"  className="navigation__location"activeClassName="navigation__location--selected">
                    <h1>My Plants</h1>
                </NavLink> 
            </nav>
        </header>
    );
}
export default Navigation;    