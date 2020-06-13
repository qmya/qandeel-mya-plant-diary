import React from 'react';
import './PlantModal.scss';

const PlantModal = (props) => {
        
    
return (
      <div className="modal">
        <h2>Add Plant</h2>
        <form >
                <div className='modal__name'>
                    <label htmlFor='name' className='label'>Name</label>
                    <input name='name' placeholder='Name' className='input'/>
                </div>
                <div className='modal__name'>
                    <label htmlFor='nickname' className='label'>Nick Name</label>
                    <input name='Nick name' placeholder='Nick Name' className='input'/>
                </div>
                <div className='modal__buttons'>
                    <button type='submit' className='modal__button'>Add PLANT</button>
                    <button type='button' className='modal__button--cancel' onClick={props.closeModal}>CANCEL</button>
                </div>
        </form>
        
      </div>
    );
};

export default PlantModal;