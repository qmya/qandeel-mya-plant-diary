import React, { Component } from 'react';
import ReactModal from 'react-modal';
import PlantList from '../../components/PlantList/PlantList.js';
// import PlantModal from '../../components/PlantModal/PlantModal.js';
import Whoops from '../Whoops/Whoops.js'; 
import { withRenderCtrl } from 'react-render-ctrl';
// import axios from 'axios';
import './MyPlants.scss';


const API_URL = 'http://localhost:8080';

class MyPlants extends React.Component {

    // state={
    //    plantList:[]
    // }
   

    // componentDidMount(){
    //     axios
    //         .get('http://localhost:8080/plant')
    //         .then( response => {
    //             this.setState({plantList: response.data})
    //         })
    // }
    // componentDidUpdate(){

    //     axios
    //         .get(API_URL + '/plant')
    //          .then(response => {
    //             this.setState({
    //                 plantList:response.data
    //             })
               
    //          })

    // }
//     render(){
//         return(
            
//             <div className='myplant'>
//                 <h1 className='myplant__header'>Your PLants</h1>
//                 <div>
//                 <p className='myplant__button'>Below is the list of the plants you have addedd to your garden.</p>
//                 <button type='submit' className='myplant__button'>Add PLANT</button>
//                 </div>
//                 <PlantList plantList={this.state.plantList}/>
//             </div>
//         )
//     }
}
export default withRenderCtrl(MyPlants,{
    EmptyComponent: () => <Whoops/>
});