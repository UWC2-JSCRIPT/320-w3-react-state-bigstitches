import './VacationRental.css';
import React from 'react';
import shoppingCart from './cart-shopping-solid.svg';
import PropTypes from 'prop-types'; 

// class constructor allows missing @returns tag
/**
 * Represents a sum.
 * @param {*} props - Whatever you want.
 */
class Shopping extends React.Component {
  // class constructor allows missing @returns tag
  /**
  * Represents a sum.
  * @param {*} props - Whatever you want.
  */
  constructor(props) {
    super(props);
    this.state = {
      inCart: false,
    };
  }
  /**
  * Represents a sum.
  * @return {boolean}
  */
  addToCart() {
    return {inCart: true};
  }
  /**
  * Represents a sum.
  * @return {boolean}
  */
  removeFromCart() {
    return {inCart: false};
  }
  /**
  * Represents a sum.
  */
  componentDidMount() {
    this.setState((props) => ({
      rentalPrice: props.rentalPrice,
      rentalTitle: props.rentalTitle,
    }));
  }
  // <h2>${this.props.rentalPrice}</h2>
  // default options allow missing function description
  // {this.rentalPrice}
  /**
  * @return {void}
  */
  render() {
    return (
      <div>
        <img src={shoppingCart} className="Vaca-cart" alt="cart" />
        <h2>{this.props.rentalPrice}</h2>
      </div>
    );
  }
}

ShoppingCart.defaultProps = {shoppingCart: []};
ShoppingCart.propTypes = {shoppingCart: PropTypes.array};


export default ShoppingCart;
