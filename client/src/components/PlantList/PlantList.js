import React from 'react';
import PlantItem from '../PlantItem/PlantItem.js';
import { v4 as uuidv4 } from 'uuid';
import './PlantList.scss';

const PlantList =(props) => {
    return(
        <div className="plantlist" >
            <div>
                <h1 className="plantlist__header">Your Plants</h1>
                <div  className="plantlist__flex">
                    <p className="plantlist__paragraph">
                        Below is the list of the plants you have added to your garden.</p>
                    <button className="plantlist__button" onClick={props.openModal}>ADD PLANTS</button>
                </div>
                {props.plantList.length ? props.plantList.map(plant =>(
                    
                    <PlantItem 
                    id={plant.id}
                    key={uuidv4()}
                    image={plant.image}
                    name={plant.name}
                    nickName={plant.nickName}
                    description={plant.description}
                    light={plant.light}
                    water={plant.water}
                    waterfrequency={plant.waterfrequency}
                    handleDelete={props.handleDelete}
                    getData={props.getData}
                    lastwatereddate={plant.lastWateredDate}
                    // reminder={plant.last-watered-date}
                    />
                )): null}
                
            {/* </div> */}
            
        </div>
        </div>
    )
}
export default PlantList;



