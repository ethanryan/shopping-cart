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
      sizeSelected: '', //for updates
      quanity: '', //for updates
      colorSelected: '', //for updates
      items: [
        {
          name: "fake thing",
          colors: ['red', 'green', 'blue'],
          colorSelected: "blue",
          quantity: 1,
          sizeSelected: "S",
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
          priceOriginal: '',
          price: 22.00,
          image: checkedShirt
        },
      ]
    }
    this.handleDeleteItem = this.handleDeleteItem.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  //NOTE: TESTING
  handleInputChange(event) {
    console.warn('handleInputChange called, event.target.name is: ', event.target.name)

    const item = this.state.items[0] //NOTE: for now, testing on first item...
    console.log('0. item is: ', item)
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    console.log('1. value is: ', value)
    const name = target.name;

    this.setState({
      [name]: value
      // [name]: value
      // arrayvar: [...this.state.arrayvar, newelement]
      // items: [...this.state.items, item]
    });
  }

  handleSubmit(event) {
    console.log('handleSubmit called!!!!!!!!!')
    var itemsArray = [...this.state.items]; // make a separate copy of the itemsArray
    let index = 0 //NOTE: for now, testing on first item...
    const item = this.state.items[index]
    item.colorSelected = this.state.colorSelected
    item.quantity = this.state.quantity
    item.sizeSelected = this.state.sizeSelected
    itemsArray[index] = item
    this.setState({
      items: itemsArray
    })
    event.preventDefault();
  }
  //NOTE: TESTING

  handleDeleteItem(event) {
    var array = [...this.state.items]; // make a separate copy of the array
    var index = event.target.value;
    array.splice(index, 1);
    this.setState({items: array});
  }

  render() {
    console.log('ShoppingCartContainer, this.state is: ', this.state)
    console.log('ShoppingCartContainer, this.state.items is: ', this.state.items)
    return (
      <div className="ShoppingCartContainer">

        <h1>
          YOUR SHOPPING CART
        </h1>

        <h2>
          {this.state.message}
        </h2>

        <p>
          If the cart is completely empty then we shall again add back the products for you
        </p>


<div>FUCKING AROUNG WITH FORM BELOW....</div>

        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              updating this.state.items[0], aka: {this.state.items[0].name}
            </label>
<br></br>

            <label>
              Color:
              <input type="text" name="colorSelected" onChange={this.handleInputChange} />
            </label>
    <br></br>

            <label>
              Size:
              <input type="text" name="sizeSelected" onChange={this.handleInputChange} />
            </label>
    <br></br>

            <label>
              Quantity:
              <input type="number" name="quantity" onChange={this.handleInputChange} />
            </label>
    <br></br>

            <input type="submit" value="Submit" />
          </form>
        </div>

        {/* <button onClick={this.handleEditItem}>
          EDIT ITEM
        </button> */}

        <ItemList
          items={this.state.items}
          handleDeleteItem={this.handleDeleteItem}
          handleEditItem={this.handleEditItem}
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
