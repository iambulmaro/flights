import React from "react";
import { Link } from 'react-router-dom'
import "../styles/SignUp.css";


const SignUp = () => {
  return (
    <form className='signupForm'>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
        <small id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>

      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Enter Password Again </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>
      <Link to='/'>
        <button type="submit" className="btn btn-primary">
          Sign Up
      </button>
      </Link>

      <p className='suggest'>Already signed up, <Link to='/login'>click here to login</Link></p>
    </form>
  );
};

export default SignUp;
