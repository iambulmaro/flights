import React from "react";
import "../styles/Login.css";
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <form className='loginForm'>
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
      <Link to='/'>
        <button type="submit" className="btn btn-primary">
          Login
      </button>
      </Link>
    </form>
  );
};

export default Login;
