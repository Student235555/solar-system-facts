import React, {useState} from 'react';
import '../styles/AgeCalculator.css';
import {Link} from 'react-router-dom';

const AgeCalculator = () => {

    const today = new Date().toISOString().slice(0,10);
    const minDate = "1888-01-01";
    let maxDate = today.slice(0,4)*1+10;
    maxDate = maxDate+"-12-31";

    const [dateOfBirth , setDateOfBirth] = useState(today);

    const handleClick = () => {
        console.log(dateOfBirth);
        console.log(today);
        const diffTime = Math.abs(Date.parse(today) - Date.parse(dateOfBirth));
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
        console.log(diffTime + " milliseconds");
        console.log(diffDays + " days");
        return diffDays;
    }

    return ( 
        <div>
            <h1 className='calcH1'>Age calculator</h1>
            <h4 className='calcH4'>Calculate how old would you be on other planets!</h4>
            <div className='calcMainDiv'>
                <label htmlFor="date">Please, select your date of birth:</label>
                <input className='ageInput' type="date" value={dateOfBirth} min={minDate} max={maxDate} onChange={event => setDateOfBirth(event.target.value)}></input><br/>
                <button className='ageBtn' onClick={handleClick}>Check your age!</button><br/>
            </div>
            <Link to="/">Return</Link>
        </div>
     );
}
 
export default AgeCalculator;
