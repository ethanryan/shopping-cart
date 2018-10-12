import React, { Component } from 'react';

import ItemList from '../components/ItemList';
import PriceSummary from '../components/PriceSummary';
import EditForm from '../components/EditForm';

import Modal from '../components/Modal';

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
      promoCodeInput: '', //will replace promoCode on submit
      promoCode: 'AJ5', //default in demo
      sizeSelected: '', //for updates
      quantity: '', //for updates
      colorSelected: '', //for updates
      items: [
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
    this.handlePromoChange = this.handlePromoChange.bind(this)
    this.handlePromoSubmit = this.handlePromoSubmit.bind(this)
  }

  handlePromoChange(event) {
    console.log('handlePromoChange - event.target.value: ' + event.target.value);
    this.setState({
      promoCodeInput: event.target.value
    });
  }

  handlePromoSubmit(event) {
    // console.log('handlePromoSubmit - event.target.value: ' + event.target.value);
    alert('A promoCode was submitted: ' + this.state.promoCodeInput);
    this.setState({
      promoCode: this.state.promoCodeInput
    })
    event.preventDefault();
  }

  handleInputChange(event) {
    console.warn('handleInputChange called, event.target.name is: ', event.target.name)
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    console.log('handleSubmit called!!!!!!!!!')
    var itemsArray = [...this.state.items]; // make a separate copy of the itemsArray
    let index = this.state.editingIndex;
    const item = this.state.items[index];
    item.colorSelected = this.state.colorSelected;
    item.quantity = this.state.quantity;
    item.sizeSelected = this.state.sizeSelected;
    itemsArray[index] = item;
    this.setState({
      items: itemsArray,
      editingIndex: null,
      editMode: false,
      colorSelected: '',
      quantity: '',
      sizeSelected: '',
    })
    event.preventDefault();
  }

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

          <Modal show={this.state.editMode}>
            {
              this.state.editMode ?
              <EditForm
                handleSubmit={this.handleSubmit}
                name={this.state.items[this.state.editingIndex].name}
                editingIndex={this.state.editingIndex}
                handleInputChange={this.handleInputChange}
              />
              :
              null
            }
          </Modal>

        <p>
          If the cart is completely empty then we shall again add back the products for you
        </p>

        <ItemList
          handleDeleteItem={this.handleDeleteItem}
          items={this.state.items}
          toggleEditMode={this.toggleEditMode}
        />

        <div id="promoCodeForm">
          <form onSubmit={this.handlePromoSubmit}>
            <label>
              PromoCode:
              <input type="text" value={this.state.promoCodeInput} onChange={this.handlePromoChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>

        <PriceSummary
          items={this.state.items}
          promoCode={this.state.promoCode}
        />

      </div>
    );
  }
}

export default ShoppingCartContainer;
