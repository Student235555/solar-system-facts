import React from 'react';
import '../styles/HomePage.css';
import PlanetsList from './PlanetsList';
import {Link} from 'react-router-dom';

const solarSystem = [
    {
      id: 0,
      name: "Mercury",
      mass: 0.330,
      diameter: 4879,
      gravity: 3.7,
      lengthOfDay: 4222.6,
      orbitalPeriod: 88,
      distanceFromSun: 57.9,
      meanTemperature: 167,
      moons: 0,
    },
    {
      id: 1,
      name: "Venus",
      mass: 4.87,
      diameter: 12104,
      gravity: 8.9,
      lengthOfDay: 2802,
      orbitalPeriod: 224.7,
      distanceFromSun: 108.2,
      meanTemperature: 464,
      moons: 0,
    },
    {
      id: 2,
      name: "Earth",
      mass: 5.97,
      diameter: 12756,
      gravity: 9.8,
      lengthOfDay: 24,
      orbitalPeriod: 365.2,
      distanceFromSun: 149.6,
      meanTemperature: 15,
      moons: 1,
    },
    {
      id: 3,
      name: "Mars",
      mass: 0.642,
      diameter: 6792,
      gravity: 3.7,
      lengthOfDay: 24.7,
      orbitalPeriod: 687,
      distanceFromSun: 227.9,
      meanTemperature: -65,
      moons: 2,
    },
    {
      id: 4,
      name: "Jupiter",
      mass: 1898,
      diameter: 142984,
      gravity: 23.1,
      lengthOfDay: 9.9,
      orbitalPeriod: 4331,
      distanceFromSun: 778.6,
      meanTemperature: -110,
      moons: 79,
    },
    {
      id: 5,
      name: "Saturn",
      mass: 568,
      diameter: 120536,
      gravity: 9.0,
      lengthOfDay: 10.7,
      orbitalPeriod: 10747,
      distanceFromSun: 1433.5,
      meanTemperature: -140,
      moons: 82,
    },
    {
      id: 6,
      name: "Uranus",
      mass: 86.8,
      diameter: 51118,
      gravity: 8.7,
      lengthOfDay: 17.2,
      orbitalPeriod: 30589,
      distanceFromSun: 2872.5,
      meanTemperature: -195,
      moons: 27,
    },
    {
      id: 7,
      name: "Neptune",
      mass: 102,
      diameter: 49528,
      gravity: 11.0,
      lengthOfDay: 16.1,
      orbitalPeriod: 59800,
      distanceFromSun: 4495.1,
      meanTemperature: -200,
      moons: 14,
    },
  ]

const HomePage = () => {
    return ( 
        <div>
          <p className='returnLink'><Link to="/">Return to the main page</Link></p>
          <h1 className='mainH1'>Planets in our solar system</h1>
          <h3 className='mainH5'>Click on a planet name to show more info!</h3>
          <PlanetsList solarSystem={solarSystem}/>
        </div>
     );
}
 
export default HomePage;