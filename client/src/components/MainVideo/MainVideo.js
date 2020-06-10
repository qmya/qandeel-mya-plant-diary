import React from 'react';
// import './MainVideo.scss';
// import {Video} from '../../assets/BrainStation Sample Video.mp4';

function MainVideo () {
    return(
        // <div>
        //   <h1>A diary to keep your plant happy and healthy</h1>
          <video loop="true" autoplay="autoplay" id="vid" muted>
              <source src="http://thenewcode.com/assets/videos/polina.webm"></source>
          </video>


       
    //  {/* </div> */}
    );
}

export default MainVideo;
