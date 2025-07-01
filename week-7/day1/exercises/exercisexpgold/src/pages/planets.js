import React from 'react';

const planets = ['Mars', 'Venus', 'Jupiter', 'Earth', 'Saturn', 'Neptune'];

function PlanetsList() {
  return (
    <div className="container mt-5">
      <h2 className="mb-3">Planets</h2>
      <ul className="list-group">
        {planets.map((planet, index) => (
          <li key={index} className="list-group-item">
            {planet}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlanetsList;
