import React from 'react';
import PlantItem from '../PlantItem/PlantItem.js';
import './PlantList.scss';

const PlantList =(props) => {
    return(
        <div className="plantlist">
            <div>
                {/* <h1 className="plantlist__header">Your Plants</h1>
                <div  className="plantlist__flex">
                    <p className="plantlist__paragraph">Below is the list of the plants you have added to your garden.</p>
                    <button className="plantlist__button">ADD PLANTS</button>
                </div> */}
                {props.plantList.length ? props.plantList.map(plant =>(
                    
                    <PlantItem
                    id={plant.id}
                    image={plant.image}
                    name={plant.name}
                    nickName={plant.nickName}
                    description={plant.description}
                    light={plant.light}
                    water={plant.water}
                    />
                )): null}
                
            </div>
            
        </div>
    )
}
export default PlantList;
