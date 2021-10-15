import React from "react";
import { Link } from 'react-router-dom'
import '../styles/ReviewPage.css';

const Roundtrip = ({dynamicLink}) => {
  return (
    <div className="roundTrip">
      <div>
        <h3>Round Trip</h3>
        <p>Departure Time </p>
        <p>Departure Airport</p>
        <p>Flight 1</p>
      </div>
      <p>Fare type</p>
      <div className="fare">
        <p>Fare</p>
        <span>$</span>
      </div>

      <div className="fare">
        <p>Taxes and fees</p>
        <span>$</span>
      </div>

      <div className="fare">
        <p>Total</p>
        <span>$</span>
      </div>
      <br></br>
      <Link to={dynamicLink} exact={true} className='continue'>Select</Link>
    </div>
  );
}

export default Roundtrip;
