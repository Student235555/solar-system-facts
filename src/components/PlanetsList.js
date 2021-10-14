import React from 'react';
import '../styles/PlanetsList.css';
import Planet from './Planet';

const PlanetsList = () => {
    return ( 
        <>
            <p>Planets list:</p>
            <ul>
                <Planet/>
            </ul>
        </>
     );
}
 
export default PlanetsList;
