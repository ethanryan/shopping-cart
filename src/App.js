import React, { Component } from 'react';
import './App.css';

import ShoppingCartContainer from './container/ShoppingCartContainer';


class App extends Component {
  render() {
    return (
      <div className="App">

        <p>
          hello world
        </p>

        <ShoppingCartContainer
        />

      </div>
    );
  }
}

export default App;
