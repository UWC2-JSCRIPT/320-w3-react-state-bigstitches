import './VacationRental.css';
import React from 'react';
import shoppingCart from './cart-shopping-solid.svg';
import inShoppingCart from './cart-arrow-down-solid.svg';
import PropTypes from 'prop-types';
/**
 * Cart Component as CLASS that shows cart empty or full
 * Cost of each rental is stored in Cart's state
 * Ability to change whether VacationRental inCart property
 * is passed as function, inCart also passed to change image
 */
class Cart extends React.Component {
  /**
  * constructor
  * @param {*} props - a method to change whether the item is in cart & boolean
  */
  constructor(props) {
    super(props);
    this.state = {};
  }
  /**
  * set state after mount; bound in parent class
  */
  componentDidMount() {
    this.setState((props) => ({
      rentalCost: this.props.rentalCost,
    }));
  }
  /**
  * Button is a full or empty cart depending on the passed method, 'cartChange'
  * @return {void}
  */
  render() {
    let buttonType;
    if (this.props.inCart) {
      buttonType = <img src={inShoppingCart} className="Vaca-cart" alt="cart"/>;
      </* this.props.updateCart(this.props.vacaRental); */></>;
    } else {
      buttonType = <img src={shoppingCart} className="Vaca-cart" alt="cart"/>;
    }
    return (
      <div>
        <button onClick={this.props.cartChange}>
          {buttonType}
        </button>
        <h2>${this.state.rentalCost}</h2>
      </div>
    );
  }
}

Cart.propTypes = {
  rentalCost: PropTypes.number,
  inCart: PropTypes.bool,
  cartChange: PropTypes.func,
}; // establish types
Cart.defaultProps = {
  inCart: false,
  cartChange: () => boolean,
  rentalCost: 0,
}; // establish default values

export default Cart;
