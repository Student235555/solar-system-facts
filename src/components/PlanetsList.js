import React, {useState} from 'react';
import '../styles/PlanetsList.css';
import Planet from './Planet';

const PlanetsList = ({solarSystem}) => {

    const [infoVisable, setInfoVisable] = useState(true);

    let planetInfo = 'planetInfo';
    let planetInfoVisibility = infoVisable ? "planetInfoVis" : "planetInfoNoVis";

    const changeVisibility = () => {
        setInfoVisable(!infoVisable);
    }

    const astronomicalObjects = solarSystem.map(astrObj =>
        <Planet key={astrObj.id} astrObj={astrObj} vis={changeVisibility}/>)

    return ( 
        <>
        <div className="rows">
            <div className="row1">
                <div className={planetInfo + ' ' + planetInfoVisibility}><p>Mercury</p></div>
                <div className="planetInfo"><p>Venus</p></div>
                <ul className='UlPlanetsList'>
                    {astronomicalObjects}
                </ul>
                <div className="planetInfo"><p>Earth</p></div>
                <div className="planetInfo"><p>Mars</p></div>
            </div>
            <div className="row2">
                <div className="planetInfo"><p>Jupiter</p></div>
                <div className="planetInfo"><p>Saturn</p></div>
                <div className="planetInfo"><p>Uranus</p></div>
                <div className="planetInfo"><p>Neptune</p></div>
            </div>
        </div>
        </>
     );
}
 
export default PlanetsList;
