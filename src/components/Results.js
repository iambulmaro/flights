import React from 'react'
import { Link } from 'react-router-dom'

const Results = () => {
  return (
    <div className="result1">
      <div className='airlines'>

        <div>
          <p>Qatar airaways</p>
          <h2>18:50</h2>
          <h4>ORD</h4>
        </div>

        <div className="departureTimes">
          <label htmlFor="vol">Departure Times:</label>
          <p>00:00 - 23:59</p>
          <input type="range" id="vol" name="vol" min="0" max="50" />
        </div>


        <div className="arrivalTimes">
          <label htmlFor="vol">Arrival Times:</label>
          <p>00:00 - 23:59</p>
          <input type="range" id="vol" name="vol" min="0" max="50" />
        </div>

        <div>
          <p>Qatar airaways</p>
          <h2>16:20</h2>
          <h4>SIN</h4>
        </div>

      </div>
      <div className='total'>
        <h1>$1,348</h1>
        <p>$2,696 total</p>
        <Link to='/review' exact={true} className='select'>Select</Link>
      </div>
    </div>
  )
}

export default Results
