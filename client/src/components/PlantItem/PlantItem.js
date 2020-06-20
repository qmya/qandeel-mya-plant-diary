import React from "react";
import DatePicker from "react-datepicker";
import Popup from "../Popup/Popup.js";
import "react-datepicker/dist/react-datepicker.css";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import plantGood from "../../assets/PlantGOOD.svg";
import plantBad from "../../assets/PlantBAD.svg";
import plantOk from "../../assets/PlantOK.svg";
import trash from "../../assets/icons8-trash_can.svg";
import light from "../../assets/icons8-sun yellow.svg";
import water from "../../assets/icons8-water blue.svg";
import "./PlantItem.scss";

let plantImg = "";
const API_URL = "http://localhost:8080";

class PlantItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
      startDate: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.togglePopup = this.togglePopup.bind(this);
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup,
    });
  }

  handleChange(date) {
    this.setState({
      startDate: date,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    axios
      .post(API_URL + "/userData/" + this.props.id, {
        date: this.state.startDate,
      })
      .then((result) => {
        this.props.getData();
      });

    console.log(this.state.startDate);
  }

  render() {
    let drop = [];
    for (var i = 0; i < this.props.water; i++) {
      drop.push(
        <img key={uuidv4()} src={water} alt="droplet of water icons" />
      );
    }
    let sun = [];
    for (var j = 0; j < this.props.light; j++) {
      sun.push(
        <img key={uuidv4()} src={light} alt="icons of sun to show light" />
      );
    }
    let between = 0;
    console.log(new Date(this.props.lastwatereddate));
    if (this.props.lastwatereddate !== "") {
      let day = Date.now() - new Date(this.props.lastwatereddate).getTime();
      between = Math.floor(day / (24 * 60 * 60 * 1000));
      console.log(between);
    }

    if (between >= 6) {
      plantImg = plantBad;
      console.log(plantImg);
    } else if (between >= 3) {
      plantImg = plantOk;
      console.log(plantImg);
    } else if (between >= 0) {
      plantImg = plantGood;
      console.log(plantImg);
    }

    return (
      <div className="plantitem" key={uuidv4()}>
        <img
          className="plantitem__image"
          src={this.props.image}
          alt="specific plant with its name"
        />
        <div className="plantitem__intro">
          <div className="plantitem__namenick">
            <div className="plantitem__name">{this.props.name}</div>
            <div className="plantitem__nickname">{this.props.nickName}</div>
          </div>
          <div className="plantitem__description">{this.props.description}</div>
          <div className="plantitem__date">
            <form className="plantitem__form" onSubmit={this.handleSubmit}>
              <h3>
                <label>Last Watered:</label>
              </h3>
              <DatePicker
                selected={this.state.startDate}
                onChange={this.handleChange}
                dateFormat="MM/dd/yyyy"
              />
              <button className="plantitem__button" type="submit">
                Add Date
              </button>
            </form>
            <h3 className="plantitem__paragraph">
              {between + " day since watered"}
            </h3>
          </div>
        </div>
        <div className="plantitem__icons">
          <div
            className="plantitem__trash"
            onClick={this.togglePopup.bind(this)}
          >
            <img src={trash} alt="to delete the plant thats no more" />
            {this.state.showPopup ? (
              <Popup
                deletePopup={() => this.props.handleDelete(this.props.id)}
                closePopup={this.togglePopup.bind(this)}
              />
            ) : null}
          </div>
          <div className="plantitem__flex">
            <img
              className="plantitem__condition"
              src={plantImg}
              alt="shows health of the plant according to the lastwatereddate"
            />
            <div className="plantitem__drop">{drop}</div>
            <div>{sun} </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PlantItem;
