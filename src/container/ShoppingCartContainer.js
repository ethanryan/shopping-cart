import React, { Component } from 'react';

import ItemList from '../components/ItemList';

class ShoppingCartContainer extends Component {
  render() {
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
