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

  // eslint-disable-next-line
  const add = () => {
    setNum(num + 1);
  };

  // eslint-disable-next-line
  const subtract = () => {
    setNum(num - 1);
  };

  // eslint-disable-next-line
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  }; 

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData))
  }, [formData])

  const [showMissionStatement, setshowMissionStatement] = useState(true);
  const [showRooms, setshowRooms] = useState(false);
  const [showFlights, setshowFlights] = useState(false);
  const onClickRooms = () => {setshowRooms(true); setshowFlights(false); setshowMissionStatement(false);};
  const onClickFlights = () => {setshowFlights(true); setshowRooms(false); setshowMissionStatement(false);};
  
  return (
    <main>
      <div className="container chooseOption">
        {/* <img className="logo" src={require('../images/comtrago.png')} alt='img' /> */}
          <div className="row">
            <div className="col-md-8 offset-md-2"> 
              {showMissionStatement ? <MissionStatement /> : null}
            </div> 
          </div>
          <div className="row my-2">
            <div className="col option-buttons">
              <button className="btn btn-room" onClick={onClickRooms}>Reserve A Room</button>
              <button className="btn btn-flights" onClick={onClickFlights}>Book A Flight</button>
            </div>
          </div>
          <div className="row my-4">
            <div className="col options">
              {showRooms ? <Rooms /> : null}
              {showFlights ? <Flights /> : null}
            </div>
        </div>
      </div>



    {/* <form className="fly">
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
    </form> */}
    </main>
  );
};

const MissionStatement = () => (
  <p className="missionStatement my-3">Need to book a flight or find a room? </p>
);
const Rooms = () =>  (
  <div id="room" class="booking-form">
    <h2 class="booking-form--heading">Rooms</h2>
    <form>
      <div class="row">
        <div class="col-md-3 align-self-center">
          <div class="form-group">	
            <span class="form-label">Destination</span>
            <input id="destination" class="form-control" type="text" name="destination" placeholder="Country, ZIP, city..." />
          </div>
        </div>
        <div class="col-md-6 align-self-center">
          <div class="row ">
            <div class="col-md-5">
              <div class="form-group">	
                <span class="form-label">Check In</span>
                <input id="checkIn" class="form-control datepicker" type="date" name="checkIn" required/>
              </div>
            </div>
            <div class="col-md-5">
              <div class="form-group">	
                <span class="form-label">Check out</span>
                <input id="checkOut" class="form-control datepicker" type="date" name="checkOut" required/>
              </div>
            </div>
            <div class="col-md-2">
              <div class="form-group">	
                <span class="form-label">Guests</span>
                <select id="guests" class="form-control" defaultValue={{ label: "1", value: 1 }}>
                  <option selected value="1">1</option>
                  <option>2</option>
                  <option>3</option>
                </select>	<span class="select-arrow"></span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3 align-self-center">
          <div class="form-btn">
            <button class="btn btn-submit">Check availability</button>
          </div>
        </div>
      </div>
    </form>
  </div>
  );


const Flights = () =>  (
  <div id="flights" class="booking-form">
    <h2 class="booking-form--heading">Flights</h2>
      <form>
        <div class="row my-2">
          <div class="col-md-3">
            <div class="form-group">
              <select class="form-control">
                <option>Economy class</option>
                <option>Business class</option>
                <option>First class</option>
              </select>
              <span class="select-arrow"></span>
            </div>
          </div>
          <div class="col-md-9">
            <div class="form-group text-right">
              <div class="form-check form-check-inline">
                <label class="form-check-label px-2" for="roundtrip">Roundtrip</label>
                <input class="form-check-input" type="radio" name="flight-type" id="roundtrip" value="roundtrip" checked/>
                
              </div>
              <div class="form-check form-check-inline">
                <label class="form-check-label px-2" for="one-way">One Way</label>
                <input class="form-check-input" type="radio" name="flight-type" id="one-way" value="one-way"/>
                
              </div>
              <div class="form-check form-check-inline">
                <label class="form-check-label px-2" for="multi-city">Multi City</label>
                <input class="form-check-input" type="radio" name="flight-type" id="multi-city" value="multi-city"/>
                
              </div>

            </div>
          </div>

        </div>

        <div class="row my-2">
          <div class="col-md-6">
            <div class="form-group">
              <span class="form-label">From</span>
              <input class="form-control" type="text" placeholder="City or airport"/>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <span class="form-label">To</span>
              <input class="form-control" type="text" placeholder="City or airport"/>
            </div>
          </div>
        </div>
        <div class="row my-2">

          <div class="col-md-2">
            <div class="form-group">
              <span class="form-label">Adults (18+)</span>
              <select class="form-control">
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
              <span class="select-arrow"></span>
            </div>
          </div>
          <div class="col-md-2">
            <div class="form-group">
              <span class="form-label">Children (0-17)</span>
              <select class="form-control">
                <option>0</option>
                <option>1</option>
                <option>2</option>
              </select>
              <span class="select-arrow"></span>
            </div>
          </div>
          <div class="col-md-3 offset-md-2">
            <div class="form-group">
              <span class="form-label">Departing</span>
              <input class="form-control" type="date" required/>
            </div>
          </div>
          <div class="col-md-3">
            <div class="form-group">
              <span class="form-label">Returning</span>
              <input class="form-control" type="date" required/>
            </div>
          </div>
        </div>
        <div class="row mt-5">

          <div class="col">
            <div class="form-btn">
              <button class="btn btn-submit">Show flights</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );


export default Home;
