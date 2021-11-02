import React from 'react';
import '../styles/PlanetsList.css';
import Planet from './Planet';

const PlanetsList = ({solarSystem}) => {

    const astronomicalObjects = solarSystem.map(astrObj =>
        <Planet key={astrObj.id} astrObj={astrObj}/>)


    return ( 
        <>
            <ul className='UlPlanetsList'>
                {astronomicalObjects}
            </ul>
        </>
     );
}
 
export default PlanetsList;
