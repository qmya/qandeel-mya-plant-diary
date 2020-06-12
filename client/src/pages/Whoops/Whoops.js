import React from 'react';
import './Whoops.scss'
import Icon from '../../assets/linkedin.svg';
import Navigation from '../../components/Navigation/Navigation.js';
import Illustration from '../../assets/illustration-two.svg';

function Whoops() {
    return(
        <div>
          
          <div className="whoops">
                <div className="whoops__wrap">
                    <h1 className="whoops__header">Whoops,looks like you don't have any plants</h1>
                    <p className="whoops__paragraph">Hit the "Add Plants" button to start adding to your list</p>
                    <button type="button" className="whoops__button">ADD PLANTS</button>
                </div>
                <img className="whoops__image" src={Illustration} alt=' empty plants page image'/>
            </div>
            <div className="whoops__footer">
         <h5>Qandeel Labs</h5>
         <img className="whoops__icon" src={Icon} alt ="linkedIn icon"/>
        </div>
        </div>
    ); 
}

export default Whoops;
