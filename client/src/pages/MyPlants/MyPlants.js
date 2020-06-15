import React, { Component } from "react";
import ReactModal from "react-modal";
import PlantList from "../../components/PlantList/PlantList.js";
import PlantModal from "../../components/PlantModal/PlantModal.js";
import Whoops from "../Whoops/Whoops.js";
import { withRenderCtrl } from "react-render-ctrl";
import axios from "axios";
import "./MyPlants.scss";

const API_URL = "http://localhost:8080";

class MyPlants extends React.Component {
  state = {
    plantList: [],
    modalIsOpen: false,
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
    console.log("open");
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };
//this function sets the value of modal is open to be the opposite
  changeModal = () => {
      this.setState({modalIsOpen:!this.state.modalIsOpen});
  }

  componentDidMount() {
    axios.get("http://localhost:8080/plant").then((response) => {
      this.setState({ plantList: response.data });
    });
  }
  getData = () => {
    axios.get("http://localhost:8080/plant").then((response) => {
      this.setState({ plantList: response.data });
    });
  }

  // componentDidUpdate(prevState){
  //    if (prevState.plantList
  //    !== this.state.plantList)
  //    {
  //     axios
  //         .get(API_URL + '/plant')
  //          .then(response => {
  //             this.setState({
  //                 plantList:response.data
  //             })

  //          })
  //         }

  // }
  render() {
    console.log(this.state.plantList);
    return (
      <div className="myplant">
        {/* <h1 className="myplant__header">Your Plants</h1>
        <div className="myplant__flex">
          <p className="myplant__paragraph">
            Below is the list of the plants you have addedd to your garden.
          </p>
          <button
            type="submit"
            className="myplant__button"
            onClick={this.openModal}
          >
            Add PLANT
          </button>
        </div> */}
        {this.state.plantList.length > 0 ? (
          <div>
            <PlantList plantList={this.state.plantList} openModal={this.changeModal}/>
            <ReactModal isOpen={this.state.modalIsOpen}>
              <PlantModal
                closeModal={this.changeModal}
                getData={this.getData}
              />
            </ReactModal>
          </div>
        ) : (
          <Whoops getData={this.getData}/>
        )}
        {/* <h1 className='myplant__header'>Your PLants</h1>
                <div>
                <p className='myplant__button'>Below is the list of the plants you have addedd to your garden.</p>
                <button type='submit' className='myplant__button' onClick={this.openModal}>Add PLANT</button>
                </div>

                <PlantList plantList={this.state.plantList}/>
                <ReactModal isOpen={this.state.modalIsOpen}>
            <PlantModal closeModal={this.closeModal}/>
        </ReactModal> */}
      </div>
    );
  }
}
export default MyPlants;
// export default withRenderCtrl(MyPlants,{
//     EmptyComponent: () => <Whoops/>
// });
