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


    const [visi, setVisi] = useState(false);

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
                    <p> <span>Mass: </span>{mass}*10<sup>24</sup> kg</p>
                    <p><span>Diameter: </span>{diameter} km</p>
                    <p><span>Gravity: </span>{gravity} m/s<sup>2</sup></p>
                    <p><span>Length of day: </span>{lengthOfDay} hours</p>
                    <p><span>Orbital period: </span>{orbitalPeriod} days</p>
                    <p><span>Distance from Sun: </span>{distanceFromSun}*10<sup>6</sup> km</p>
                    <p><span>Mean temperature: </span>{meanTemperature} &#176;C</p>
                    <p><span>Number of moons: </span>{moons}</p>
                </div>
            </li>
        </>
     );
}
 
export default Planet;
