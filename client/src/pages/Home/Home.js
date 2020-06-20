import React from 'react';
import './Home.scss';
import ReactModal from 'react-modal';
import PlantModal from '../../components/PlantModal/PlantModal.js';
import illustration from '../../assets/illustration.svg';
// import icon from '../../assets/icons8-linkedin.svg';
import pot from '../../assets/icons8-potted-plant.svg';
import heart from '../../assets/icons8-heart.svg';
import water from '../../assets/icons8-water.svg';
import health from '../../assets/icons8-stethoscope.svg';
import MainVideo from '../../components/MainVideo/MainVideo.js';
import axios from "axios";

const API_URL = "http://localhost:8080";
class Home extends React.Component {



  constructor(props) {
    super(props);
    this.state = { 
        modalIsOpen: false 
    };
  }
  
  getData = () => {
    axios.get(API_URL +'/plant').then((response) => {
      this.setState({ plantList: response.data });
    })
    .catch(error => console.log(`Error : ${error}`)
       )
  }

  openModal = () => {
    this.setState({modalIsOpen: true});
    console.log("open");
  }

  closeModal = () => {
    this.setState({modalIsOpen: false});
  }
  changeModal = () => {
    this.setState({modalIsOpen:!this.state.modalIsOpen});
}
render(){
    return (
        <div>
         
          <MainVideo/>
          
          <div className="home">
          <h1 className="home__header">What to expect?</h1>
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
                
                
                  <button type="button" className="home__button" onClick={this.openModal}>GET STARTED</button>
                
            </div>
                <img className="home__image" src ={illustration}  alt= "a girl talking care of plants"/>
          </div>
        </div>
        <ReactModal className="home__modal" isOpen={this.state.modalIsOpen}>
        <PlantModal
                
                closeModal={this.changeModal}
                getData={this.getData}
              />
            </ReactModal>
        
       
        </div>
       
    );
}
}
export default Home;