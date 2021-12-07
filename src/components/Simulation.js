import React from 'react';
import '../styles/Simulation.css';
import {Link} from 'react-router-dom';

const Simulation = () => {
    return ( 
        <div>
            <h1>Simulation</h1>
            <div class="dots">
                <span class="dot sun"></span>
                <span class="dot uranus"></span>
                <span class="dot jupiter"></span>
                <span class="dot earth"></span>
                <span class="dot mercury"></span>
                <span class="dot venus"></span>
                <span class="dot mars"></span>
                <span class="dot saturn">
                    {/* <div class='line'></div> */}
                </span>
                <span class="dot neptune"></span>
            </div>
            <p className='returnLink'><Link to="/">Return to the main page</Link></p>
        </div>
     );
}
 
export default Simulation;
