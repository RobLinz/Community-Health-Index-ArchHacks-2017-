import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Data from './Data';
import Search from './Search';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Search}/>
            <Route exact path="/view/:zipcode" component={Data}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
