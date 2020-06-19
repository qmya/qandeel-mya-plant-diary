import React from 'react';  
import './Popup.scss';  

function Popup (props) {  
   
    

  console.log(props)
return (  
    
<div className='popup'>  
<div className='popup__inner'> 
<h1>Are you sure to delete this?</h1>  
{/* <button onClick={this.props.closePopup}>close me</button>   */}
<button className='popup__button'onClick={props.closePopup}>close me</button>  
<button className='popup__button' onClick={props.deletePopup} >Yes please</button>  
</div>  
</div>
);  
}  
 

export default Popup;