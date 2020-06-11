import React from 'react';
import './Home.scss';
import illustration from '../../assets/illustration.svg';
import icon from '../../assets/icons8-linkedin.svg';
import pot from '../../assets/icons8-potted-plant.svg';
import heart from '../../assets/icons8-heart.svg';
import water from '../../assets/icons8-water.svg';
import health from '../../assets/icons8-stethoscope.svg';
import MainVideo from '../../components/MainVideo/MainVideo.js';
import { Link } from 'react-router-dom';


function Home(props) {
    return (
        <div>
         
          <MainVideo/>
          
          <div className="home">
          <h1>What to expect?</h1>
              <div className="home__wrap">
              <div className="home__column">

                <div className="home__flex">
                <img className="home__sideicon" src={pot} alt ="pot icon"/>
                  <p className="home__paragraph">Add your plants</p>
                  
                </div>
                <div className="home__flex">
                <img className="home__sideicon" src={heart} alt ="heart icon"/>
                  <p className="home__paragraph">We will tell you how to take care of your plants</p>
                </div>
                <div className="home__flex">
                <img className="home__sideicon" src={water} alt ="water icon"/>
                  <p className="home__paragraph">Track when you have watered your plants</p>
                </div>
                <div className="home__flex">
                <img className="home__sideicon" src={health} alt ="health icon"/>
                  <p className="home__paragraph">We will let you know how healthy your plants are</p>
                </div>
                <Link to={`/plant/${props.id}`}>
                  <button type="button" className="home__button">GET STARTED</button>
                </Link>
            </div>
                <img className="home__image" src ={illustration}  alt= "a girl talking care of plants"/>
          </div>
        </div>
        <div className="home__footer">
         <h5>Qandeel Labs</h5>
         <img className="home__icon" src={icon} alt ="linkedIn icon"/>
        </div>
        </div>
       
    );
}
export default Home;