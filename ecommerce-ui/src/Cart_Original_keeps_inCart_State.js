import './VacationRental.css';
import React from 'react';
import shoppingCart from './cart-shopping-solid.svg';
import inShoppingCart from './cart-arrow-down-solid.svg';
import PropTypes from 'prop-types'; // imported because eslint is giving errors

// class constructor allows missing @returns tag
/**
 * Represents a sum.
 * @param {*} props - Whatever you want.
 */
class Cart extends React.Component {
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
    this.handleClick = this.handleClick.bind(this);
  }
  /**
  * Do I need this?  Does it do this automatically?
  */
  componentDidMount() {
    this.setState((props) => ({
      rentalPrice: this.props.rentalPrice,
    }));
  }
  /**
  * In Cart or Not in Cart
  */
  handleClick() {
    // this.props.cartChange;
    this.setState((prevState) => ({
      inCart: !prevState.inCart,
    }));
  }
  // <h2>${this.props.rentalPrice}</h2>
  // default options allow missing function description
  // {this.rentalPrice}
  /**
  * @return {void}
  */
  render() {
    let buttonType;
    // if (this.props.inCart) {
    if (this.state.inCart) {
      buttonType = <img src={inShoppingCart} className="Vaca-cart" alt="cart"/>;
    } else {
      buttonType = <img src={shoppingCart} className="Vaca-cart" alt="cart"/>;
    }
    return (
      <div>
        <button onClick={this.handleClick}>
          {buttonType}
        </button>
        <h2>${this.state.rentalPrice}</h2>
      </div>
    );
  }
}

Cart.defaultProps = {rentalPrice: 0}; // eslint is evil
Cart.propTypes = {rentalPrice: PropTypes.number}; // just the worst

export default Cart;
