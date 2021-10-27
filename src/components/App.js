import React from 'react';
import '../styles/App.css';
import PlanetsList from './PlanetsList';

const solarSystem = [
  {
    id: 0,
    name: "Sun",
  },
  {
    id: 2,
    name: "Mercury",
  },
  {
    id: 3,
    name: "Venus",
  },
  {
    id: 4,
    name: "Earth",
  },
  {
    id: 5,
    name: "Mars",
  },
  {
    id: 6,
    name: "Jupiter",
  },
  {
    id: 7,
    name: "Saturn",
  },
  {
    id: 8,
    name: "Uranus",
  },
  {
    id: 9,
    name: "Neptune",
  },
]

function App() {
  return (
    <div className="App">
      <h1>Solar System</h1>
      <PlanetsList solarSystem={solarSystem}/>
    </div>
  );
}

export default App;
