import React from 'react';
import "./Navigation.scss";
// import { NavLink } from 'react-router-dom';
import Logo from '../../assets/flower.svg';

function Navigation () {
    
    return ( 
        <header className="header">
            {/* <NavLink to="/"> */}
             <img src ={Logo} className="header__icon" alt="logo for the plant site"/>
            {/* </NavLink> */}
            <h1>Plant Diary</h1>
            <nav>
            
                {/* <NavLink to= "/MyPlants"  className="navigation__location"activeClassName="navigation__location--selected"> */}
                    <div>My plants</div> 
                {/* </NavLink>  */}
            </nav>
        </header>
    );
}
export default Navigation;    