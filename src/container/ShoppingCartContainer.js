import React, { Component } from 'react';

import ItemList from '../components/ItemList';

class ShoppingCartContainer extends Component {
  constructor() {
    super()
    this.state = {
      message: 'helloooooo everybody!',
      something: true,
    }
  }

  render() {
    console.log('ShoppingCartContainer, this.state is: ', this.state)
    return (
      <div className="ShoppingCartContainer">

        <p>
          this is the ShoppingCartContainer
        </p>

        <ItemList
        />

      </div>
    );
  }
}

export default ShoppingCartContainer;
