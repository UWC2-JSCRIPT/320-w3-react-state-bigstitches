import logo from './logo.svg';
import './App.css';
import bnbs from './bnbs.json';
import React from 'react';
import VacationRental from './VacationRental';

/**
 * Set up app for vacation rental
 * @return {JSX} The rendered vacation rentals
 */
function App() {
  // const [shoppingCart, updateShoppingCart] = useState([]);
  // updateShoppingCart = (eachRental) => shoppingCart.push(eachRental);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React for Fun!!
        </a>
      </header>
      <main>
        <div className="App">
          {bnbs.map((rental, rentalIndex) => (
            <VacationRental
              key={rentalIndex}
              index={rentalIndex}
              element={rental}
              cost={rental.payment.cost}>
            </VacationRental>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
