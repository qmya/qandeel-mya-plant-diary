import React from 'react';
import PlantItem from '../PlantItem/PlantItem.js';
import './PlantList.scss';

const PlantList =(props) => {
    return(
        <div>
            <div>
                <h1>Your Plants</h1>
                <div>
                    <p>Below is the list of the plants you have added to your garden.</p>
                    <button>ADD PLANTS</button>
                </div>
                {/* {props.PlantList.map(plant =>{
                    return 
                    <PlantItem
                    id={plant.id}
                    image={plant.image}
                    name={plant.name}
                    description={plant.description}
                    light={plant.light}
                    // water-frequency={plant.water-frequency}
                    />
                })} */}
                
            </div>
            
        </div>
    )
}
export default PlantList;
