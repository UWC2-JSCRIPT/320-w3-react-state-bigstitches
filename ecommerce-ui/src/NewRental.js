import './VacationRental.css';
import React from 'react';
import {useState} from 'react';
import VacationRental from './VacationRental';
import RentalForm from './RentalForm';
import PropTypes from 'prop-types';
/**
* NewRental component calls VacationRental for to display a new rental
* the newRental state is updated from the component, RentalForm
* @param {function} props function
* @return {JSX} The rendered vacation rentals
*/
function NewRental(props) {
  NewRental.defaultProps = {
    updateCart: () => [],
  };
  NewRental.propTypes = {
    updateCart: PropTypes.func,
  };
  const [newRental, setNewRental] = useState(
      {
        'title': 'Bogus House',
        'houseType': 'House',
        'image': '',
        'location': {
          'city': 'Nowhere',
          'country': 'USA',
        },
        'payment': {
          'cost': 900,
          'description': '$900 to cancel',
        },
        'host': {
          'name': 'Turtle',
          'isSuperhost': true,
        },
        'rating': {
          'stars': 10,
          'reviews': 0,
        },
      },
  );
  /**
   * set the state of the newRental
   * @param {object} rental element to add or remove
   */
  function addNewRentals(rental) {
    const updatedRentalObj = {};
    updatedRentalObj.title = rental.title;
    updatedRentalObj.houseType = rental.myRadio;
    updatedRentalObj.image = rental.imageUrl;
    updatedRentalObj.location = {};
    updatedRentalObj.location.city = rental.city;
    updatedRentalObj.location.country = rental.country;
    updatedRentalObj.payment = {};
    updatedRentalObj.payment.cost = rental.cost;
    // string to number
    updatedRentalObj.payment.cost = (+updatedRentalObj.payment.cost);
    updatedRentalObj.payment.description = (
        rental.freeCancel === 'on' ? 'Free cancellation' : 'Penalty'
    );
    updatedRentalObj.host = {};
    updatedRentalObj.host.name = rental.name;
    updatedRentalObj.host.isSuperhost = false;
    updatedRentalObj.rating = {stars: 0, reviews: 0};
    setNewRental(updatedRentalObj);
  }
  const vacationJSX = (
    newRental.title === 'Bogus House' ? <></> :
    <VacationRental
      key={4}
      index={4}
      element={newRental}
      cost={newRental.payment.cost}
      updateCart = {props.updateCart}>
    </VacationRental>
  );
  /**
  * NewRental component displays the new rental
  * created from the RentalForm
  * @return {jsx} display the new rental
  */
  return (
    <div>
      <RentalForm
        addNewRentals = {addNewRentals}>
      </RentalForm>
      <div>
        {vacationJSX}
      </div>
    </div>
  );
}

export default NewRental;
