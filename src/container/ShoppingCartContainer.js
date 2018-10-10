import React, { Component } from 'react';

import ItemList from '../components/ItemList';

class ShoppingCartContainer extends Component {
  constructor() {
    super()
    this.state = {
      message: 'helloooooo everybody!',
      something: true,
      items: [
        {
          name: 'toy',
        },
        {
          name: 'car',
        }
      ]
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
          items={this.state.items}
        />

      </div>
    );
  }
}

export default ShoppingCartContainer;
