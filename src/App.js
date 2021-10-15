import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import SearchResults from './components/SearchResults';
import { Route, Switch } from 'react-router-dom'
import ReviewPage from './components/ReviewPage';
import TravelerInfo from './components/TravelerInfo';
import PaymentForm from './components/PaymentForm';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/results' component={SearchResults} />
        <Route exact path='/review' component={ReviewPage} />
        <Route exact path='/info' component={TravelerInfo} />
        <Route exact path='/payment' component={PaymentForm} />
      </Switch>
    </div>
  );
}

export default App;
