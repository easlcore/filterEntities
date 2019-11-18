import React from 'react';

import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import { Home } from './components/home';

import logo from './logo.svg';
import './App.css';

export class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />

            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </header>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
