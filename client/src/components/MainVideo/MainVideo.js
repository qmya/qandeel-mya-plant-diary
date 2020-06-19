import React from 'react';
import './MainVideo.scss';
import plantVideo from "../../assets/plantvideo.mp4";

function MainVideo () {
    return(
       <>
       
         
           
      
      <div className="heroimage__container" >
      <video className="heroimage" loop={true} autoPlay="autoplay" id="vid" muted>
           <source src ={plantVideo}></source>
           </video>
          <div className="heroimage__wrapper">
          
           <h1 className="paragraph anim-typewriter">
               A diary to keep your plant  happy and healthy</h1> 
          </div>
      </div>
       </>
        
    );
}

export default MainVideo;

