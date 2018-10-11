import React, { Component } from 'react';

import ItemList from '../components/ItemList';
import PriceSummary from '../components/PriceSummary';

import cottonTshirt from '../components/assets/cotton-tshirt.jpg'
import blueBlouse from '../components/assets/blue-blouse.jpg'
import checkedShirt from '../components/assets/checked-pattern-shirt.jpg'
import pinkShirt from '../components/assets/pink-tshirt.jpg'

class ShoppingCartContainer extends Component {
  constructor() {
    super()
    this.state = {
      message: 'helloooooo everybody!',
      something: true,
      items: [
        {
          name: "delete me!",
        },
        {
          name: "COTTON TSHIRT",
          styleNumber: "MS13KT1906",
          colors: [],
          colorSelected: "blue",
          sizes: [],
          sizeSelected: "S",
          quantity: 1,
          priceOriginal: '',
          price: 11.00,
          image: cottonTshirt,
        },
        {
          name: "PINK GIRLS TEE",
          styleNumber: "MS13KT1906",
          colors: [],
          colorSelected: "pink",
          sizes: [],
          sizeSelected: "M",
          quantity: 2,
          priceOriginal: '',
          price: 17.00,
          image: pinkShirt
        },
        {
          name: "FLOWER PATTERN SHIRT",
          styleNumber: "MS13KT1906",
          colors: [],
          colorSelected: "blue",
          sizes: [],
          sizeSelected: "S",
          quantity: 1,
          priceOriginal: 21.00, //show this with a line through it
          price: 9.00,
          image: blueBlouse
        },
        {
          name: "CHECK PATTERN TSHIRT",
          styleNumber: "MS13KT1906",
          colors: [],
          colorSelected: "red",
          sizes: [],
          sizeSelected: "M",
          quantity: 1,
          priceOriginal: '', //show this with a line through it
          price: 22.00,
          image: checkedShirt
        },
      ]
    }
    this.handleDeleteItem = this.handleDeleteItem.bind(this)
  }

  // removePeople(e) {
  //   var array = [...this.state.people]; // make a separate copy of the array
  //   var index = array.indexOf(e.target.value)
  //   array.splice(index, 1);
  //   this.setState({people: array});
  // },

  handleDeleteItem(e) {
    console.warn('handleDeleteItem called...')
    console.warn('handleDeleteItem called, e is: ', e)
    console.warn('handleDeleteItem called, e.target.value is: ', e.target.value)
    var array = [...this.state.items]; // make a separate copy of the array
    console.log('0. handleDeleteItem - array is: ', array)
    // var index = array.indexOf(e.target.value)
    // var index = 0 //testing...
    var index = e.target.value //testing...
    console.log('1. handleDeleteItem - index is: ', index)
    array.splice(index, 1);
    console.log('2. handleDeleteItem - array.splice(index, 1) called...' )
    console.log('3. handleDeleteItem - array is now: ', array)
    this.setState({items: array});
  }

  render() {
    console.log('ShoppingCartContainer, this.state is: ', this.state)
    console.log('ShoppingCartContainer, this.state.items is: ', this.state.items)
    return (
      <div className="ShoppingCartContainer">

        <p>
          this is the ShoppingCartContainer
        </p>

        <h1>
          YOUR SHOPPING CART
        </h1>
        <p>
          If the cart is completely empty then we shall again add back the products for you
        </p>

        <button onClick={this.handleDeleteItem}>
          DELETE ITEM
        </button>

        <ItemList
          items={this.state.items}
          handleDeleteItem={this.handleDeleteItem}
        />

        <PriceSummary
          promoCode={this.state.promoCode}
          priceTotal={this.state.priceTotal}
        />

      </div>
    );
  }
}

export default ShoppingCartContainer;
