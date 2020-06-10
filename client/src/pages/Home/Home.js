import React from 'react';
import Illustration from '../../assets/illustration.svg';
import Navigation from '../../components/Navigation/Navigation.js';
import MainVideo from '../../components/MainVideo/MainVideo.js';


function Home() {
    return (
        <div>
         <Navigation/>
          <MainVideo/>
          <div>
             <h1>What to expect</h1>
             <div>
                 <p>Add your plants</p>
             </div>
             <div>
                 <p>We will tell you how to take care of your plants</p>
             </div>
             <div>
                 <p>Track when you have watered your plants</p>
             </div>
             <div>
                 <p>We will let you know how healthy your plants are</p>
             </div>
          </div>
          <button> Get started </button>
          <img src ={Illustration} alt= "image with a girl talking care of plants"/>
        </div>
       
    );
}
export default Home;