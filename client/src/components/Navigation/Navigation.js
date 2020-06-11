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
            <h1 className="header__one">Plant Diary</h1>
            <nav>
            
                {/* <NavLink to= "/MyPlants"  className="navigation__location"activeClassName="navigation__location--selected"> */}
                    <div className="header__two">My Plants</div> 
                {/* </NavLink>  */}
            </nav>
        </header>
    );
}
export default Navigation;    