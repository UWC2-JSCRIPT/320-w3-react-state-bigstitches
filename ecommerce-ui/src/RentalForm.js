import './VacationRental.css';
import React from 'react';
import PropTypes from 'prop-types';
/**
 * RentalForm component responsible for form allowing rentals
 * to get added.  Calls props.addNewRentals to update
 * NewRental state
 * @param {addNewRentals} props, addNewRental
 * @return {JSX} The rendered form
 */
function RentalForm(props) {
  RentalForm.defaultProps = {
    addNewRentals: () => {},
  };
  RentalForm.propTypes = {
    addNewRentals: PropTypes.func,
  };
  /**
  * this function is modified from
  * https://beta.reactjs.org/reference/react-dom/components/input
  * @param {event} event button click to submit form
  */
  function handleSubmit(event) {
    // Prevent the browser from reloading the page
    event.preventDefault();
    // Read the form data
    const form = event.target;
    const formData = new FormData(form);
    // Set new state through props.function as plain object:
    const formJson = Object.fromEntries(formData.entries());
    props.addNewRentals(formJson);
  }
  return (
    <form method="post" onSubmit={handleSubmit}>
      <label>
        title: <input name="title" defaultValue="title of rental" />
      </label>
      <p>
        House Type:
        <label><input type="radio" name="myRadio" value="Apartment" />
          Apartment
        </label>
        <label><input type="radio"
          name="myRadio"
          value="Entire House"
          defaultChecked={true} />
          Entire House
        </label>
        <label><input type="radio" name="myRadio" value="SharedPartial" />
          Shared/Partial
        </label>
      </p>
      <label>
        Image URL: <input name="imageUrl" defaultValue="" />
      </label>
      <label>
        Free Cancellation?: <input
          type="checkbox"
          name="freeCancel"
          defaultChecked={true} />
      </label>
      <label>
        Price per Night: <input name="cost" defaultValue="0" />
      </label>
      <label>
        City: <input name="city" defaultValue="Ottawa" />
      </label>
      <label>
        Country: <input name="country" defaultValue="Canada" />
      </label>
      <label>
        Host Name: <input name="name" defaultValue="Bill George" />
      </label>
      <button type="reset">Reset form</button>
      <button type="submit">Submit form</button>
    </form>
  );
}

export default RentalForm;
