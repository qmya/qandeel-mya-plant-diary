import React, {useState} from "react";
// import Calendar from 'react-calendar';
import trash from '../../assets/icons8-trash_can.svg';
import light from '../../assets/icons8-sun yellow.svg';
import water from '../../assets/icons8-water blue.svg';
import "./PlantItem.scss";

function PlantItem(props){
  // const [date, setDate]=useState(newDate());

  // const onChange =date =>{
  //   setDate(date)
  // }
    let drop=[];
    for(var i=0; i<props.water; i++){
      drop.push(<img src={water}/>)
    }
    let sun =[];
    for(var i=0; i<props.light; i++){
      sun.push(<img src={light}/>)
    }

    return(

            <div className='plantitem'>
                 <img className='plantitem__image'src={props.image}/>
                 <div className='plantitem__intro'>
                 <div className='plantitem__namenick'>
                 <div className='plantitem__name'>{props.name}</div> 
                 <div className='plantitem__nickname'>{props.nickName}</div> 
                 
                 </div>
                 <div className='plantitem__description'>{props.description}</div>
                 
                 </div>
                
                 <div className='plantitem__icons'>
                 <div className='plantitem__trash'><img src={trash}/></div>
                 <div className='plantitem__drop'>{drop}</div>
                 <div>{sun} </div>
                 </div>
                 {/* <div>
                   <Calendar onChange={onChange} value={date}/>
                   
                   </div> */}
            </div>  
            
    );
}

export default PlantItem;