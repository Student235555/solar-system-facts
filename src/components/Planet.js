import React, {useState} from 'react';
import '../styles/Planet.css';

const Planet = () => {

    const [active, setActive] = useState(true);

    let LiPlanet = active ? "LiPlanet" : "LiPlanet2";

    const changeColor = () => {
        setActive(!active);
    }

    return ( 
        <>
            <li className={LiPlanet} onClick={() => changeColor()}>Mercury</li>
            <li className='LiPlanet'>Venus</li>
            <li className='LiPlanet'>Earth</li>
            <li className='LiPlanet'>Mars</li>
            <li className='LiPlanet'>Jupiter</li>
            <li className='LiPlanet'>Saturn</li>
            <li className='LiPlanet'>Uranus</li>
            <li className='LiPlanet'>Neptune</li>
        </>
     );
}
 
export default Planet;
