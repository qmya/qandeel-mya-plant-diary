import React, {useState} from 'react';
import './PlantModal.scss';
import axios from 'axios';

const PlantModal = (props) => {
    const [name, setName] = useState('') ;
    const [nickName, setnickName] =useState('');
    
   const handleSaveClicked = (event) => {
        event.preventDefault();
    
        const data = new FormData(event.target);
       
        axios
            .post('http://localhost:8080/plant/userData', {
                name:`${name}`,
                nickName:`${nickName}`
            })
            .then(function (response) {
                props.getData();
                props.closeModal();
              })
              .catch(function (error) {
                console.log(error);
              })
            //   alert('Add plant button was clicked');
      }
    console.log(props);
return (
      <div className="modal">
        <h2 className="modal__heading">Add Plant</h2>
        <form onSubmit={handleSaveClicked}>
                <div className='modal__name'>
                    <label htmlFor='name' className='label'>Name</label>
                    <input name='name' onChange={(e) => setName(e.target.value) } placeholder='Name' className='input'/>
                </div>
                <div className='modal__name'>
                    <label htmlFor='nickname' className='label'>Nick Name</label>
                    <input name='nickName' onChange={(e) => setnickName(e.target.value) } placeholder='Nick Name' className='input'/>
                </div>
                <div className='modal__buttons'>
                    <button type='submit' className='modal__button'>Add PLANT</button>
                    <button type='button' className='modal__button button--cancel
                    ' onClick={props.closeModal}>CANCEL</button>
                </div>
        </form>
        
      </div>
    );
};

export default PlantModal;