import React from 'react';
import '../styles/Simulation.css';
import {Link} from 'react-router-dom';

const Simulation = () => {
    return ( 
        <div>
            <h1>Simulation</h1>
            <p className='returnLink'><Link to="/">Return to the main page</Link></p>
        </div>
     );
}
 
export default Simulation;
