import './VacationRental.css';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Set up app for vacation rental
 * @param {array} rentalsInCart, array of all rentals in cart
 * @return {JSX} The rendered shopping cart of rentals
 */
function ShoppingCartFunction(rentalsInCart) {
  ShoppingCartFunction.defaultProps = {
    rentalsInCart: [],
  };
  ShoppingCartFunction.propTypes = {
    rentalsInCart: PropTypes.array,
  };
  let total = 0;
  const listItems = rentalsInCart.rentalsInCart.map((rental) => {
    if (rental.title !== undefined) {
      if (rental.title !== 'empty') {
        total += rental.payment.cost;
        return <li key={rental.title}>
          {rental.title}: ${rental.payment.cost}
        </li>;
      } else {
        total = 0;
        return;
      }
    } else {
      total = 0;
      return;
    }
  });
  return (
    <div className="Vaca">
      <ul>{listItems}</ul>
      <p>${total}</p>
    </div>
  );
}

export default ShoppingCartFunction;
