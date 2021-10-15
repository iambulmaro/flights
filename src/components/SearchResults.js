import React from "react";
import "../styles/SearchResults.css";
import Results from "./Results";

const requestData = JSON.parse(localStorage.getItem('formData'));



const SearchResults = () => {
  const {from, to, depart, flightReturn, noOfTravelers, num} = requestData;
  return (
    <div className="searchResults">
      <table class="table">
        <thead>
        
          <tr>
            <th scope="col">From</th>
            <th scope="col">To</th>
            <th scope="col">Depart</th>
            <th scope="col">Return</th>
            <th scope="col"> No. Of Travelers</th>
            <th scope="col">Type (Adult/Child)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input type="text" defaultValue={from}/>
            </td>
            <td>
              <input type="text" defaultValue={to}/>
            </td>
            <td>
              <input type="date" defaultValue={depart}/>
            </td>
            <td>
              <input type="date" defaultValue={flightReturn}/>
            </td>
            <td>
              <input type="number" defaultValue={num}/>
            </td>
            <td>
            <select name="cars" id="cars">
          <option value="adult">Adult</option>
          <option value="child">Child</option>
        </select>
            </td>
          </tr>
        </tbody>
      </table>

      <div className='flex'>
        <div className="filters">
          <h2>Filters</h2>
          <div className="stops">
            <input type="checkbox" />
            <label>1 stop </label>
          </div>
          <div className="stops">
            <input type="checkbox" />
            <label>2+ stops </label>
          </div>
          <br></br>
          <div className="depTimes">
            <label>Departure Time </label>
            <select name="times" id="times">
              <option value="Morning">Morning</option>
              <option value="Afternoon">Afternoon</option>
              <option value="Evening">Evening</option>
            </select>
          </div>
          <br></br>
          <div className="arrTimes">
            <label>Arrival Time </label>
            <select name="times" id="times">
              <option value="Morning">Morning</option>
              <option value="Afternoon">Afternoon</option>
              <option value="Evening">Evening</option>
            </select>
          </div>
        </div>
          <Results />
  
      </div>
    </div>
  );
};

export default SearchResults;
