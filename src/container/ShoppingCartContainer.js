import React, { Component } from 'react';

import ItemList from '../components/ItemList';
import PriceSummary from '../components/PriceSummary';
import EditForm from '../components/EditForm';

import cottonTshirt from '../components/assets/cotton-tshirt.jpg'
import blueBlouse from '../components/assets/blue-blouse.jpg'
import checkedShirt from '../components/assets/checked-pattern-shirt.jpg'
import pinkShirt from '../components/assets/pink-tshirt.jpg'

class ShoppingCartContainer extends Component {
  constructor() {
    super()
    this.state = {
      editMode: false,
      editingIndex: null,
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
    this.toggleEditMode = this.toggleEditMode.bind(this)
  }

  handleInputChange(event) {
    console.warn('handleInputChange called, event.target.name is: ', event.target.name)
    const item = this.state.editingIndex
    // console.log('0. item is: ', item)
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    console.log('handleSubmit called!!!!!!!!!')
    var itemsArray = [...this.state.items]; // make a separate copy of the itemsArray
    let index = this.state.editingIndex
    const item = this.state.items[index]
    item.colorSelected = this.state.colorSelected
    item.quantity = this.state.quantity
    item.sizeSelected = this.state.sizeSelected
    itemsArray[index] = item
    this.setState({
      items: itemsArray,
      editingIndex: null,
      editMode: false,
      colorSelected: '',
      quanity: '',
      sizeSelected: '',
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

  toggleEditMode(event) {
    console.log('toggleEditMode clicked.........')
    var index = event.target.value;
    console.log('toggleEditMode, index is: ', index)
    this.setState(prevState => ({
      editMode: !prevState.editMode,
      editingIndex: index
    }));
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

        {
          this.state.editMode === true ?
          <EditForm
            handleSubmit={this.handleSubmit}
            name={this.state.items[this.state.editingIndex].name}
            editingIndex={this.state.editingIndex}
            handleInputChange={this.handleInputChange}
          />
          :
          <ItemList
            items={this.state.items}
            handleDeleteItem={this.handleDeleteItem}
            toggleEditMode={this.toggleEditMode}
          />
        }

        <PriceSummary
          promoCode={this.state.promoCode}
          priceTotal={this.state.priceTotal}
        />

      </div>
    );
  }
}

export default ShoppingCartContainer;
