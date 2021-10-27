import React, {useState} from 'react';
import '../styles/Planet.css';

const Planet = ({astrObj}) => {

    const {name} = astrObj;

    const [active, setActive] = useState(true);

    let LiPlanet = active ? "LiPlanet" : "LiPlanet2";

    const changeColor = () => {
        setActive(!active);
    }

    return ( 
        <>
            <li className={LiPlanet} onClick={() => changeColor()}>{name}</li>
        </>
     );
}
 
export default Planet;
