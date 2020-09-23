import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './Home';
import '../App.css';

function App() {
  return (
    <div className="App">
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" component={HomePage} exact />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
