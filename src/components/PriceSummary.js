import React, { Component } from 'react';

import ContactInfo from './ContactInfo';
import PromoCodeForm from './PromoCodeForm';

class PriceSummary extends Component {

  getSubtotal() {
    //for each element in items, multiply the quantity and price
    let filteredArray = this.props.items.map(object => {
      return object.quantity * object.price
    })
    // console.warn('getSubtotal - filteredArray is: ', filteredArray)
    var result = filteredArray.reduce((a, b) => a + b, 0); //sum up every number to get the total
    // console.log('getSubtotal - result is: ', result)
    return result
  }

  getPromoCode() {
    let promoCode = this.props.promoCode
    if (promoCode.toUpperCase() === "AJ5") {
      promoCode = 2.15
    } else {
      promoCode = 0
    }
    return promoCode
  }

  getFinalPrice() {
    let subtotal = this.getSubtotal()
    let promoCode = this.getPromoCode()
    let shippingCost = 0 //shipping is free in demo...
    let total = (subtotal - promoCode) + shippingCost
    return total
  }

  render() {
    // console.log('PriceSummary this.props is: ', this.props)
    return (
      <div className="PriceSummary-grid">

      <ContactInfo
      />

      <div className="price-summary-data-wrapper">
        <ul className="price-summary-ul">

          <li>
            ENTER PROMOTION CODE OR GIFT CARD
          </li>
          <li className="align-right">
            <PromoCodeForm
              handlePromoSubmit={this.props.handlePromoSubmit}
              promoCode={this.props.promoCode}
              promoCodeInput={this.props.promoCodeInput}
              handlePromoChange={this.props.handlePromoChange}
            />
          </li>

          <li>
            SUB TOTAL
          </li>
          <li className="align-right">
            ${this.getSubtotal().toFixed(2)}
          </li>

          <li>
            PROMOTION CODE {this.props.promoCode.toUpperCase()} APPLIED
          </li>
          <li className="align-right">
            {this.props.promoCode.toUpperCase() === "AJ5" ? "$2.15" : "0"}
          </li>

          <li>
            ESTIMATED SHIPPING*
            <p>
              You qualify for free shipping because your order is over $50
            </p>
          </li>
          <li className="align-right">
            FREE
          </li>

          <li>
            ESTIMATED TOTAL
            <p>
              Tax will be applied during checkout
            </p>
          </li>
          <li className="align-right">
            ${this.getFinalPrice().toFixed(2)}
          </li>

        </ul>
      </div>

      </div>
    );
  }
}

export default PriceSummary;
