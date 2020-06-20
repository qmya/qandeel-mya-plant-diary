import React from "react";
import ReactModal from "react-modal";
import PlantList from "../../components/PlantList/PlantList.js";
import PlantModal from "../../components/PlantModal/PlantModal.js";
import Whoops from "../Whoops/Whoops.js";
import axios from "axios";
import "./MyPlants.scss";

ReactModal.setAppElement("body");

const API_URL = "http://localhost:8080";

class MyPlants extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plantList: [],
      modalIsOpen: false,
    };
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
    console.log("open");
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };
  //this function sets the value of modal is open to be the opposite
  changeModal = () => {
    this.setState({ modalIsOpen: !this.state.modalIsOpen });
  };

  componentDidMount() {
    axios
      .get(API_URL + "/plant")
      .then((response) => {
        this.setState({ plantList: response.data });
      })
      .catch((error) => console.log(`Error : ${error}`));
  }
  getData = () => {
    axios
      .get(API_URL + "/plant")
      .then((response) => {
        this.setState({ plantList: response.data });
      })
      .catch((error) => console.log(`Error : ${error}`));
  };

  // added delete to delete plant when its no more
  handleDelete = (deleteID) => {
    axios
      .delete(API_URL + "/userData/" + deleteID)
      .then((response) => {
        this.setState({
          plantList: response.data,
        });
      })
      .catch((error) => console.log("Sorry! Can not delete the plant"));
  };
  render() {
    console.log(this.state.plantList);
    return (
      <div className="myplant">
        {this.state.plantList.length > 0 ? (
          <div>
            <PlantList
              plantList={this.state.plantList}
              openModal={this.changeModal}
              handleDelete={this.handleDelete}
              getData={this.getData}
            />
            <ReactModal
              className="myplant__modal"
              isOpen={this.state.modalIsOpen}
            >
              <PlantModal
                closeModal={this.changeModal}
                getData={this.getData}
              />
            </ReactModal>
          </div>
        ) : (
          <Whoops getData={this.getData} />
        )}
      </div>
    );
  }
}
export default MyPlants;
