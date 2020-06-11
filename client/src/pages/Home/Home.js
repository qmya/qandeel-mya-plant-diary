import React from 'react';
import './Home.scss';
import Illustration from '../../assets/illustration.svg';
import Icon from '../../assets/linkedin.svg';
import Navigation from '../../components/Navigation/Navigation.js';
import MainVideo from '../../components/MainVideo/MainVideo.js';


function Home() {
    return (
        <div>
         <Navigation/>
          <MainVideo/>
          
          <div className="home">
          <h1>What to expect</h1>
              <div className="home__wrap">
              <div className="home__column">
                <div>
                  <p className="home__paragraph">Add your plants</p>
                </div>
                <div>
                  <p className="home__paragraph">We will tell you how to take care of your plants</p>
                </div>
                <div>
                  <p className="home__paragraph">Track when you have watered your plants</p>
                </div>
                <div>
                  <p className="home__paragraph">We will let you know how healthy your plants are</p>
                </div>
                 <button type="button" className="home__button">GET STARTED</button>
            </div>
                <img className="home__image" src ={Illustration}  alt= "a girl talking care of plants"/>
          </div>
        </div>
        <div className="home__footer">
         <h5>Qandeel Labs</h5>
         <img className="home__icon" src={Icon} alt ="linkedIn icon"/>
        </div>
        </div>
       
    );
}
export default Home;