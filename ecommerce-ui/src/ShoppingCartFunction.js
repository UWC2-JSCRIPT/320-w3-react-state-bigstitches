import './VacationRental.css';
import React from 'react';
import {useEffect} from 'react';
// import shoppingCart from './cart-shopping-solid.svg';
import PropTypes from 'prop-types';

/**
 * Set up app for vacation rental
 * @param {array} rentalsInCart, bnbs element and its index
 * @return {JSX} The rendered vacation rentals
 */
function ShoppingCartFunction(rentalsInCart) {
  ShoppingCartFunction.defaultProps = {
    rentalsInCart: [],
    // index: 0,
  };
  ShoppingCartFunction.propTypes = {
    rentalsInCart: PropTypes.array,
    // index: PropTypes.number,
  };
  /**
  * useEffect() wrapped around Parent method 'updateCart'
  * to ensure item is mounted.
  */
  let total = 0;
  let cartDisplay;
  if (rentalsInCart.rentalsInCart[0].title === 'empty') {
    total = 0;
    cartDisplay = <span>$0</span>;
  } else {
    // clean up the array to remove dupicates
    // assign the total
    rentalsInCart.rentalsInCart.forEach((element) => {
      console.log(element.title);
      total += element.payment.cost;
    });
    cartDisplay = <span>{total}</span>;
  }
  // let total = 0;
  useEffect(() => {
    // console.log('VacationRental mounted');
    // console.log(rentalsInCart[0].rentalsInCart);
    if (rentalsInCart === undefined) {
      // console.log('undefined');
      // cartDisplay = <div>rentals not in cart yet</div>;
      // cartDisplay = <span>What the Fuck is going on</span>;
    } else {
      // console.log('tirsty', (rentalsInCart.rentalsInCart[0]));
      // total = rentalsInCart.rentalsInCart.map(((value) => {
      // total += value.payment.cost;
      // }));
      // cartDisplay = '<div>some rentals in cart</div>';
      if (rentalsInCart.rentalsInCart[0].title === 'empty') {
      // cartDisplay = <span>$0</span>;
      } else {
      // rentalsInCart.rentalsInCart.forEach((element) => {
      // total += element.payment.cost;
      // });
      // cartDisplay = <span>{total}</span>;
      }
    }
  }, [rentalsInCart]);
  // console.log('here', cartDisplay);
  /**
  * Change the state of the cart depnding on its previous value
  * @return {boolean} inCart or vacation rental !inCart
  */
  return (
    <div className="Vaca">
      <p>HERE: {total}</p>
      <p>{rentalsInCart.rentalsInCart[0].title}</p>
      <p>{cartDisplay}</p>
    </div>
  );
}

export default ShoppingCartFunction;
