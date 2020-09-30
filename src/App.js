import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Default from './Components/home';
import SignupForm from './Containers/SignUpForm';
import LoginForm from './Containers/LoginForm';
import ProductsList from './Containers/ProductsList';
import UserProfile from './Containers/User';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Default} exact />
          <Route path="/login" component={LoginForm} />
          <Route path="/signup" component={SignupForm} />
          <Route path="/products" component={ProductsList} exact />
          <Route path="/profile" component={UserProfile} />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
