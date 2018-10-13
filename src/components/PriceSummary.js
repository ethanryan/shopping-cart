import React, { Component } from 'react';

import ContactInfo from './ContactInfo';
import PromoCodeForm from './PromoCodeForm';

class PriceSummary extends Component {

  getSubtotal() {
    let filteredArray = this.props.items.map(object => {
      return object.quantity * object.price
    })
    var result = filteredArray.reduce((a, b) => a + b, 0); //sum up every number to get the total
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
    return (
      <div className="PriceSummary-grid">

      <ContactInfo
      />

      <table className="pricing-table">

        <thead></thead>

        <tbody>

          <tr>
            <td className="table-bottom-border cellPaddingBottom">
              ENTER PROMOTION CODE OR GIFT CARD
            </td>
            <td className="table-bottom-border cellPaddingBottom">
              <PromoCodeForm
                handlePromoSubmit={this.props.handlePromoSubmit}
                promoCode={this.props.promoCode}
                promoCodeInput={this.props.promoCodeInput}
                handlePromoChange={this.props.handlePromoChange}
              />
            </td>
          </tr>

          <tr>
            <td className="cellPadding">
              SUB TOTAL
            </td>
            <td className="align-right cellPadding">
              ${this.getSubtotal().toFixed(2)}
            </td>
          </tr>

          <tr>
            <td className="cellPadding">
              PROMOTION CODE {this.props.promoCode.toUpperCase()} APPLIED
            </td>
            <td className="align-right cellPadding">
              {this.props.promoCode.toUpperCase() === "AJ5" ? "$2.15" : "0"}
            </td>
          </tr>

          <tr>
            <td className="table-bottom-border cellPadding">
              ESTIMATED SHIPPING*<br></br>
                You qualify for free shipping because your order is over $50
            </td>
            <td className="align-right table-bottom-border cellPadding">
              FREE
            </td>
          </tr>

          <tr>
            <td className="cellPadding">
              ESTIMATED TOTAL
              <p>
                Tax will be applied during checkout
              </p>
            </td>
            <td className="align-right cellPadding">
              ${this.getFinalPrice().toFixed(2)}
            </td>
          </tr>

        </tbody>
      </table>

      <hr className="thicker-line"></hr>

      <div className="align-right">
        <hr className="very-thick-line"></hr>

        <span>
          <u>
            CONTINUE SHOPPING
          </u>
          <button className="primary-button margin-left">CHECKOUT</button>
        </span>

        <p>
          🔒 Secure checkout. Shopping is always safe & secure
        </p>

        <hr className="thicker-line"></hr>

      </div>

      </div>
    );
  }
}

export default PriceSummary;
