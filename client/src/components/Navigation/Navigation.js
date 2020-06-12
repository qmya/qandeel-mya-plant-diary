import React from 'react';
import "./Navigation.scss";
import { Link } from 'react-router-dom';
import Logo from '../../assets/flower.svg';

function Navigation () {
    
    return ( 
        <header className="header">
            <Link to="/">
             <img src ={Logo} className="header__icon" alt="logo for the plant site"/>
            </Link>
            <h1 className="header__one">Plant Diary</h1>
            <nav>
            
                <Link to= "/myplants">
                    <div className="header__two">My Plants</div> 
                </Link>
            </nav>
        </header>
    );
}
export default Navigation;    