import './App.css';
import React from 'react';
/**
 * Set up app for vacation rental
 * @param {bnbs} element, bnbs element
 * @param {number}  index of element
 * @return {JSX} The rendered vacation rentals
 */
function VacationRental(element, index) {
  return (
    <div key={index} className="App">
      {element.title}
      {element.houseType}
    </div>
  );
}

export default VacationRental;
