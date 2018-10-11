import React, { Component } from 'react';

import ContactInfo from './ContactInfo';


class PriceSummary extends Component {
  render() {
    console.log('PriceSummary this.props is: ', this.props)
    return (
      // <div className="price-summary-list-wrapper">

      // <ul className="PriceSummary-ul">
      <div className="PriceSummary-grid">

      <ContactInfo
      />

      <div className="price-summary-data-wrapper">
        <ul>
          <li>
            ENTER PROMOTION CODE OR GIFT CARD
          </li>
          <li>SUB TOTAL</li>
          <li>PROMOTION CODE AJ5 APPLIED</li>
          <li>
            ESTIMATED SHIPPING*
            <p>
              You qualify for free shipping because your order is over $50
            </p>
          </li>
          <li>
            ESTIMATED TOTAL
            <p>
              Tax will be applied during checkout
            </p>
          </li>

        </ul>
      </div>

      </div>

    );
  }
}

export default PriceSummary;
