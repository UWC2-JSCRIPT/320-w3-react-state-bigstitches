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
   * local function to keep cart unique items only
   * @param {object} value element of array
   * @param {number} index index of element
   * @param {array} self whole array
   * @return {array} unique item
   */
  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
  /**
   * local function to keep cart unique items only
   * @param {object} value element of array
   * @param {number} index index of element
   * @param {array} self whole array
   * @return {bool} unique item
   */
  let refModLocalArray;
  /**
   * Change the state of the cart depnding
   * @param {object} vacaElement element to add or remove
   * @param {boolean} boolInCart true ? add : remove
   */
  function refModCart(vacaElement, boolInCart) {
    if (boolInCart) {
      if (shoppingCart[0].title === 'empty') {
        refModLocalArray = ([vacaElement]); // simple replace
      } else {
        refModLocalArray = (shoppingCart.concat(shoppingCart,
            [vacaElement]));
      }
    } else {
      if (shoppingCart.length === 1) {
        refModLocalArray = [[{title: 'empty'}]];
      } else {
        refModLocalArray = (
          shoppingCart.filter((a) => {
            return a.title !== vacaElement.title;
          }));
      }
    }
    modCart(refModLocalArray.filter(onlyUnique));
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

export default App;
