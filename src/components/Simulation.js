import React from 'react';
import '../styles/Simulation.css';


const Simulation = () => {
    return ( 
        <div>
            <h1 className='H1simulation'>Our Solar System Simulation</h1>
            <div class="dots">
                <span class="dot sun"></span>
                <span class="dot uranus"></span>
                <span class="dot jupiter"></span>
                <span class="dot earth"></span>
                <span class="dot mercury"></span>
                <span class="dot venus"></span>
                <span class="dot mars"></span>
                <span class="dot saturn">
                     <div class='line'></div> 
                </span>
                <span class="dot neptune"></span>
            </div>
           
        </div>
     );
}
 
export default Simulation;
