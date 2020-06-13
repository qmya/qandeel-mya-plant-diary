import React, { useEffect, useState, useRef } from 'react';
import ReactModal from 'react-modal';
import PlantModal from '../../components/PlantModal/PlantModal.js';
import './Whoops.scss'
import Icon from '../../assets/linkedin.svg';

import Illustration from '../../assets/illustration-two.svg';

class Whoops extends React.Component {


   



    constructor(props) {
        super(props);
        this.state = { 
            modalIsOpen: false 
        };
      }
    
      openModal = () => {
        this.setState({modalIsOpen: true});
        console.log("open");
      }
    
      closeModal = () => {
        this.setState({modalIsOpen: false});
      }
    
   
    
    //   handleSaveClicked = (e) => {
    //     alert('Save button was clicked');
    //   }




 render(){
    return(
        <div>
            <div className="whoops">
                <div className="whoops__wrap">
                    <h1 className="whoops__header">Whoops,looks like you don't have any plants</h1>
                    <p className="whoops__paragraph">Hit the "Add Plants" button to start adding to your list</p>
                    <button type="button" className="whoops__button" onClick={this.openModal}>ADD PLANTS</button>
                </div>
                <img className="whoops__image" src={Illustration} alt=' empty plants page image'/>
            </div>
            <div className="whoops__footer">
         <h5>Qandeel Labs</h5>
         <img className="whoops__icon" src={Icon} alt ="linkedIn icon"/>
        </div>
        
        <ReactModal isOpen={this.state.modalIsOpen}>
            <PlantModal closeModal={this.closeModal}/>
        </ReactModal>
       
        </div>
    ); 
 }
}

export default Whoops;
