import React, { Component } from 'react';

import ContactInfo from './ContactInfo';


class PriceSummary extends Component {

  // componentDidUpdate() {
  //   this.props.getSubtotal()
  // }

  getSubtotal() {
    //for each element in items, multiply the quantity and price
    let filteredArray = this.props.items.map(object => {
      return object.quantity * object.price
    })
    console.warn('getSubtotal - filteredArray is: ', filteredArray)
    var result = filteredArray.reduce((a, b) => a + b, 0);
    //finally, sum up every number to get the total
    console.log('getSubtotal - result is: ', result)
    // this.setState({subTotal: result})
    return result
  }

  getFinalPrice() {
    let subtotal = this.getSubtotal()
    let promoCode = this.props.promoCode //need to get this from container...
    if (promoCode === "AJ5") {
      promoCode = 2.15
    } else {
      promoCode = 0
    }
    let shippingCost = 0 //shipping is free in demo...
    let total = (subtotal - promoCode) + shippingCost
    return total
  }

  render() {
    console.log('PriceSummary this.props is: ', this.props)
    // this.props.getSubtotal()
    return (
      <div className="PriceSummary-grid">

      <ContactInfo
      />

      <div className="price-summary-data-wrapper">
        <ul className="price-summary-ul">

          <li>
            ENTER PROMOTION CODE OR GIFT CARD
          </li>
          <li>
            AJ5 (input field) APPLY (button)
          </li>

          <li>
            SUB TOTAL
          </li>
          <li>
            ${this.getSubtotal().toFixed(2)}
          </li>

          <li>
            PROMOTION CODE AJ5 APPLIED (dynamically rendered)
          </li>
          <li>
            $2.15
          </li>

          <li>
            ESTIMATED SHIPPING*
            <p>
              You qualify for free shipping because your order is over $50
            </p>
          </li>
          <li>
            FREE
          </li>

          <li>
            ESTIMATED TOTAL
            <p>
              Tax will be applied during checkout
            </p>
          </li>
          <li>
            ${this.getFinalPrice().toFixed(2)}
          </li>

        </ul>
      </div>

      </div>
    );
  }
}

export default PriceSummary;
