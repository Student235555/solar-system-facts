import React, {useState} from 'react';
import '../styles/Planet.css';

const Planet = ({astrObj}) => {

    const {name, mass, diameter, gravity, lengthOfDay, orbitalPeriod, distanceFromSun, meanTemperature, moons} = astrObj;

    const [active, setActive] = useState(true);

    let LiPlanetMain = 'LiPlanetMain';
    let LiPlanetColor = active ? "LiPlanetColor1" : "LiPlanetColor2";

    const changeColor = () => {
        setActive(!active);
    }


    const [visi, setVisi] = useState(true);

    let divInLi = 'divInLi';
    let divInLiVis = visi ? "divInLiNoVis" : "divInLiVis";

    const changeVisi = () => {
        setVisi(!visi);
    }

    return ( 
        <>
            <li className='planetLiContainer'>
                <p className={LiPlanetMain + ' ' + LiPlanetColor} onClick={() => { changeColor(); changeVisi();}}>{name}</p>
                <div className={divInLi + ' ' + divInLiVis}>
                    <p>Mass: {mass} 10<sup>24</sup> kg</p>
                    <p>Diameter: {diameter} km</p>
                    <p>{gravity}</p>
                    <p>{lengthOfDay}</p>
                    <p>{orbitalPeriod}</p>
                    <p>{distanceFromSun}</p>
                    <p>{meanTemperature}</p>
                    <p>{moons}</p>
                </div>
            </li>
        </>
     );
}
 
export default Planet;
