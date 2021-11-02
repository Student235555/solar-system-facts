import React from 'react';
import '../styles/App.css';
import PlanetsList from './PlanetsList';

const solarSystem = [
  {
    id: 0,
    name: "Mercury",
  },
  {
    id: 1,
    name: "Venus",
  },
  {
    id: 2,
    name: "Earth",
  },
  {
    id: 3,
    name: "Mars",
  },
  {
    id: 4,
    name: "Jupiter",
  },
  {
    id: 5,
    name: "Saturn",
  },
  {
    id: 6,
    name: "Uranus",
  },
  {
    id: 7,
    name: "Neptune",
  },
]

function App() {
  return (
    <div className="App">
      <h1 className='mainH1'>Planets in our solar system</h1>
      <PlanetsList solarSystem={solarSystem}/>
    </div>
  );
}

export default App;
