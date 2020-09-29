/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from './slider';
import logo from '../logo.svg';

export default class Default extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <div className="logo-img">
            <img src={logo} alt="App Logo" className="logo" />
            <button type="button" className="outlined-btn">
              <Link to="/login" className="links">LOGIN</Link>
            </button>
            <div className="divider" />
            <button type="button" className="outlined-btn">
              <Link to="/signup" className="links">SIGNUP</Link>
            </button>
          </div>
          <Slider />
        </header>
      </div>
    );
  }
}
