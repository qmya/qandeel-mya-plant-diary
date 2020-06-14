import React from "react";
// import "./PlantItem.scss";

function PlantItem(props){
    return(
            <div className='plantitem__card'>
                 {/* <div>{props.id}</div> */}
                 <div >{props.image}</div>
                 <div>{props.name}</div> 
                 <div>{props.nickName}</div> 
                 <div>{props.description}</div>
                 <div>{props.water}</div>
                 <div>{props.light}</div>
            </div>  
    );
}

export default PlantItem;