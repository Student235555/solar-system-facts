import React, {useState} from 'react';
import '../styles/AgeCalculator.css';
import {Link} from 'react-router-dom';

const AgeCalculator = () => {

    const today = new Date().toISOString().slice(0,10);
    const minDate = "1888-01-01";
    let maxDate = today.slice(0,4)*1+10;
    maxDate = maxDate+"-12-31";
    
    const [dateOfBirth , setDateOfBirth] = useState(today);
    const [firstClick, setFirstClick] = useState(false);
    const [days, setDays] = useState(0);

    let content = null;

    const [mercuryAge, setMercuryAge] = useState(0);
    const [venusAge, setVenusAge] = useState(0);
    const [earthAge, setEarthAge] = useState(0);
    const [marsAge, setMarsAge] = useState(0);
    const [jupiterAge, setJupiterAge] = useState(0);
    const [saturnAge, setSaturnAge] = useState(0);
    const [uranusAge, setUranusAge] = useState(0);
    const [neptuneAge, setNeptuneAge] = useState(0);

    const handleClick = () => {
        setFirstClick(true);
        console.log(dateOfBirth);
        console.log(today);
        const diffTime = Math.abs(Date.parse(today) - Date.parse(dateOfBirth));
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
        console.log(diffTime + " milliseconds");
        console.log(diffDays + " days");
        setDays(diffDays);
        setMercuryAge(diffDays/88);
        setVenusAge(diffDays/225);
        setEarthAge(diffDays/365);
        setMarsAge(diffDays/687);
        setJupiterAge(diffDays/(11.8*365));
        setSaturnAge(diffDays/(29.4*365));
        setUranusAge(diffDays/(84*365));
        setNeptuneAge(diffDays/(164*365));
    }

    content = (
        <>
            <h3>Your age on other planets:</h3>
            <h4>Mercury: {mercuryAge.toFixed(2)}</h4>
            <h4>Venus: {venusAge.toFixed(2)}</h4>
            <h4>Earth: {earthAge.toFixed(2)}</h4>
            <h4>Mars: {marsAge.toFixed(2)}</h4>
            <h4>Jupiter: {jupiterAge.toFixed(2)}</h4>
            <h4>Saturn: {saturnAge.toFixed(2)}</h4>
            <h4>Uranus: {uranusAge.toFixed(2)}</h4>
            <h4>Neptune: {neptuneAge.toFixed(2)}</h4>
            <h4>Number of days: {days}</h4>
        </>
    )

    return ( 
        <div>
            <h1 className='calcH1'>Age calculator</h1>
            <h4 className='calcH4'>Calculate how old would you be on other planets!</h4>
            <div className='calcMainDiv'>
                <label htmlFor="date">Please, select your date of birth:</label>
                <input className='ageInput' type="date" value={dateOfBirth} min={minDate} max={maxDate} onChange={event => setDateOfBirth(event.target.value)}></input><br/>
                <button className='ageBtn' onClick={handleClick}>Check your age!</button><br/>
                {firstClick ? content : <p>Please, enter your birthday above in order to display results!</p>}
            </div>
            <Link to="/">Return</Link>
        </div>
     );
}
 
export default AgeCalculator;
