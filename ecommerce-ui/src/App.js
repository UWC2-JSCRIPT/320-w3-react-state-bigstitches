// import logo from './logo.svg';
import './App.css';
import bnbs from './bnbs.json';
import React, {useState} from 'react';
import VacationRental from './VacationRental';
import ShoppingCartFunction from './ShoppingCartFunction';

/**
 * VacationRental Component maps through each rental in the
 * bnbs.json file and displays it with a clickable button
 * (button is from the Cart component), then updates the App
 * Component which holds the state of the shopping cart.
 * @return {JSX} The rendered vacation rentals
 */
function App() {
  const [shoppingCart, modCart] = useState([{title: 'empty'}]);
  /**
   * Change the state of the cart depnding
   *
   * @param {object} vacaElement element to add or remove
   * @param {boolean} boolInCart true ? add : remove
   */
  function refModCart(vacaElement, boolInCart) {
    if (boolInCart) {
      if (shoppingCart[0].title === 'empty') {
        modCart([vacaElement]); // simple replace
      } else {
        modCart(shoppingCart.concat(shoppingCart,
            [vacaElement]));
      }
    } else {
      if (shoppingCart.length === 1) {
        modCart([{title: 'empty'}]);
      } else {
        modCart(
            shoppingCart.filter((a) => {
              return a.title !== vacaElement.title;
            }));
      }
    }
  }; // end function refModCart(vacaElement)
  /**
   * @return {jsx} vacation
   */
  return (
    <div className="App">
      <main>
        <div className="App">
          {bnbs.map((rental, rentalIndex) => (
            <VacationRental
              key={rentalIndex}
              index={rentalIndex}
              element={rental}
              cost={rental.payment.cost}
              updateCart = {refModCart}>
            </VacationRental>
          ))}
        </div>
        <div className="App">
          <ShoppingCartFunction
            rentalsInCart = {shoppingCart}>
          </ShoppingCartFunction>
        </div>
      </main>
    </div>
  );
}

/**
 * {shoppingCart.map((itemInCart, itemIndex) => (
            <ShoppingCartFunction
              rentalInCart = {itemInCart}
              index={itemIndex}
              key={itemIndex}>
            </ShoppingCartFunction>
          ))}
 */

export default App;
