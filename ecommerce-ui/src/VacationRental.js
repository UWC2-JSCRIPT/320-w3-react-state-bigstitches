import './VacationRental.css';
import React, {useState} from 'react';
import Cart from './Cart'; // class component
import PropTypes from 'prop-types'; // imported because eslint is giving errors
// import CartFunction from './CartFunction';
/**
 * Set up app for vacation rental
 * @param {bnbs} props, bnbs element and its index
 * @return {JSX} The rendered vacation rentals
 */
function VacationRental(props) {
  VacationRental.defaultProps = {element: {}, index: 0, cost: 999};
  VacationRental.propTypes = {
    element: PropTypes.object,
    index: PropTypes.number,
    cost: PropTypes.number,
  };
  const {title, houseType, image} = props.element;
  const [inCart, setCart] = useState(false);
  /**
   * Change the state of the cart depnding on its previous value
   * @return {boolean} inCart or vacation rental !inCart
   */
  return (
    <div key={props.index} className="Vaca">
      <p>{title}, {houseType}, {image}</p>
      <p>{props.element.title}</p>
      <Cart
        rentalCost = {props.cost}
        cartChange = {() => setCart(!inCart)}
        inCart = {inCart}>
      </Cart>
    </div>
  );
}

export default VacationRental;
