import './VacationRental.css';
import React from 'react';
import shoppingCart from './cart-shopping-solid.svg';
import PropTypes from 'prop-types'; // imported because eslint is giving errors
/**
 * CartFunction, react component that displays a cart image and updates Cart.
 * Image type depends on whether the VacationRental is in your cart or not,
 * (which looks for the user to click on the cart image)
 * @param {props} props entire rental object, pass to Cart if clicked
 * @return {JSX} shows whether the rental is in your cart by image type
*/
function CartFunction(props) {
  CartFunction.defaultProps = {wholeRental: {}}; // eslint is evil
  CartFunction.propTypes = {wholeRental: PropTypes.object}; // just the worst
  const cost = props.wholeRental.payment.cost;
  return (
    <div>
      <a>
        <span>
          <img src={shoppingCart} className="Vaca-cart" alt="cart" />
          <span> </span>${cost}
        </span>
      </a>
    </div>
  );
}

export default CartFunction;

