import React from 'react'

const SelectedFlight = () => {
    return (
        <div className="selectedFlight">
        <h3>Review Selected Flight</h3>
        <div className="flexAirline">
          <div>
            <p>Flight 1 - Airline</p>
          </div>
          <div>
            <p>Departure Time </p>
            <p>Departure Airport</p>
          </div>
          <div>
            <p> ------ </p>
          </div>
          <div>
            <p>Arrival Time </p>
            <p>Arrival Airport</p>
          </div>
        </div>
        <div className='airlineInfo'>
            <p>Airline flight number </p>
            <p> Information on stops</p>
        </div>
        
        <div className="flexAirline">
          <div>
            <p>Flight 2 - Airline</p>
          </div>
          <div>
            <p>Departure Time </p>
            <p>Departure Airport</p>
          </div>
          <div>
            <p> ------ </p>
          </div>
          <div>
            <p>Arrival Time </p>
            <p>Arrival Airport</p>
          </div>
        </div>
        <div className='airlineInfo'>
            <p>Airline flight number </p>
            <p> Information on stops</p>
        </div>
        </div>
    )
}

export default SelectedFlight
