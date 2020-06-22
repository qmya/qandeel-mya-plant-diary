import React, { useState } from "react";
import "./PlantModal.scss";
import axios from "axios";

const PlantModal = (props) => {
  const [name, setName] = useState("");
  const [nickName, setnickName] = useState("");

  const handleSaveClicked = (event) => {
    event.preventDefault();
    
    axios
      .post("http://localhost:8080/userData", {
        name: `${name}`,
        nickName: `${nickName}`,
      })
      .then(function (response) {
        props.getData();
        props.closeModal();
      })
      .catch(function (error) {
        console.log(error);
        alert("Sorry! This plant does not exist");
      });
  };
  return (
    <div className="modal">
      <h2 className="modal__heading">Add Plant</h2>
      <form onSubmit={handleSaveClicked}>
        <div className="modal__name">
          <label htmlFor="name" className="label">
            Plant Name
          </label>
          <input
            name="name"
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="modal__input"
          />
        </div>
        <div className="modal__name">
          <label htmlFor="nickname" className="label">
            Nick Name  {" "}
          </label>
          <input
            name="nickName"
            onChange={(e) => setnickName(e.target.value)}
            placeholder="Nick Name"
            className="modal__input"
          />
        </div>
        <div className="modal__buttons">
          <button
            type="submit"
            className="modal__button"
            onClick={(event) => (window.location.href = "/myplants")}
          >
            ADD PLANT
          </button>
          <button
            type="button"
            className="modal__button button--cancel"
            onClick={props.closeModal}
          >
            CANCEL
          </button>
        </div>
      </form>
    </div>
  );
};

export default PlantModal;
