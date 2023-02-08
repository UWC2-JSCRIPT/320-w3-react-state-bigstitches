import './VacationRental.css';
import React, {useState} from 'react';
import {useEffect} from 'react';
import {useRef} from 'react';
import Cart from './Cart'; // class component
import PropTypes from 'prop-types'; // imported because eslint is giving errors
/**
 * Set up app for vacation rental that takes in four props
 * from the App component:
 * - element, the object of each rental in bnbs.json
 * - index, the index of the array used as a key
 * - cost, cost of each rental (redundant)
 * - updateCaert, function to update the App component shoppingCart
 * @param {bnbs} props, bnbs element and its index
 * @return {JSX} The rendered vacation rentals
 */
function VacationRental(props) {
  VacationRental.defaultProps = {
    element: {},
    index: 0,
    cost: 9999,
    updateCart: () => [],
  };
  VacationRental.propTypes = {
    element: PropTypes.object,
    index: PropTypes.number,
    cost: PropTypes.number,
    updateCart: PropTypes.func,
  };
  const {title, houseType, image} = props.element;
  const [inCart, setCart] = useState(false);
  const mountedRef = useRef();
  /**
  * useEffect() wrapped around Parent method 'updateCart'
  * to ensure item is mounted.
  */
  useEffect(() => {
    // console.log('VacationRental mounted');
    if (mountedRef.current) {
      // console.log('Update Cart, (call in VacaRental');
      props.updateCart(props.element, inCart);
      mountedRef.current = false;
    }
  }, [inCart]);
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
        cartChange = {() => setCart((inCart) => {
          mountedRef.current = true;
          return !inCart;
        })}
        inCart = {inCart}>
      </Cart>
    </div>
  );
}

export default VacationRental;
