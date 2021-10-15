import React, { useState,  useEffect } from "react";
import "../styles/Home.css";

const Home = () => {
  const [num, setNum] = useState(1);
  


  const [formData, setFormData] = useState({
    from: "",
    to: "",
    depart: "",
    flightReturn: "",
    noOfTravelers: "",
    type: "",
    cabinClass: "",
    num
  });

  const add = () => {
    setNum(num + 1);
  };

  const subtract = () => {
    setNum(num - 1);
  };

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  }; 

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData))
  }, [formData])

 
  
  return (
    <form className="fly">
      <h1>Fly</h1>
      <div className="radios">
        <label class="container">
          Round Trip
          <input type="radio" checked="checked" name="radio" />
          <span class="checkmark"></span>
        </label>
        <label class="container">
          One way
          <input type="radio" name="radio" />
          <span class="checkmark"></span>
        </label>
        <label class="container">
          Multi City
          <input type="radio" name="radio" />
          <span class="checkmark"></span>
        </label>
      </div>

      <div className="departureForm">
        <div className="inputs">
          <label>From: </label>
          <input
            type="text"
            placeholder="City, Airport"
            name="from"
            onChange={handleChange}
          />
        </div>
        <div className="inputs">
          <label>To: </label>
          <input
            type="text"
            placeholder="City, Airport"
            name="to"
            onChange={handleChange}
          />
        </div>
        <div className="inputs">
          <label>Depart: </label>
          <input type="date" placeholder="City, Airport"
          onChange={handleChange}
          name='depart'
          />
        </div>
        <div className="inputs">
          <label>Return: </label>
          <input type="date" placeholder="City, Airport"
             name='flightReturn'
             onChange={handleChange}
          />
        </div>
      </div>
      <div className="nearbyRadios">
        <label class="secondContainer">Add Nearby</label>
        <input type="radio" />
        <label class="secondContainer">Add Nearby</label>
        <input type="radio" />
      </div>

      <h1>Travelers</h1>
      <div className="travelersForm">
        <div className="noOfTravelers">
          <label>No. of Travelers: </label>
          <span className="toggleInt">
            <span onClick={add}>+</span>/<span onClick={subtract}>-</span>
          </span>
          <h4>{num > 0 ? num : 1}</h4>
        </div>

        <div className="age">
          <label>Type (Adult/Child): </label>
          <select name="type" id="cars"  onChange={handleChange}>
            <option value="adult">Adult</option>
            <option value="child">Child</option>
          </select>
        </div>
        <div className="flight">
          <label>Cabin Class: </label>
          <select name="cabinClass" id="cars" onChange={handleChange}>
            <option value="adult">first</option>
            <option value="child">business</option>
            <option value="adult">premium-economy</option>
            <option value="child">economy</option>
          </select>
        </div>
      </div>
 <div style={{marginTop: '5vh'}}>
      <a href='/results' className='search' >search</a>
      </div>
    </form>
  );
};

export default Home;
