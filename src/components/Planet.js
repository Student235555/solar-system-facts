import React, {useState} from 'react';
import '../styles/Planet.css';

const Planet = ({astrObj}) => {

    const {name} = astrObj;

    const [active, setActive] = useState(true);

    let LiPlanetMain = 'LiPlanetMain';
    let LiPlanetColor = active ? "LiPlanetColor1" : "LiPlanetColor2";

    const changeColor = () => {
        setActive(!active);
    }


    const [visi, setVisi] = useState(true);

    let divInLi = 'divInLi';
    let divInLiVis = visi ? "divInLiVis" : "divInLiNoVis";

    const changeVisi = () => {
        setVisi(!visi);
    }

    return ( 
        <>
            <li>
                <p className={LiPlanetMain + ' ' + LiPlanetColor} onClick={() => { changeColor(); changeVisi();}}>{name}</p>
                <div className={divInLi + ' ' + divInLiVis}>{name + " LOL"}</div>
            </li>
        </>
     );
}
 
export default Planet;
