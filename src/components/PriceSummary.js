import React, { Component } from 'react';

import ContactInfo from './ContactInfo';


class PriceSummary extends Component {
  render() {
    console.log('PriceSummary this.props is: ', this.props)
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

          <li>SUB TOTAL</li>
          <li>$43.00 (subtotal dynamically rendered)</li>

          <li>PROMOTION CODE AJ5 APPLIED (dynamically rendered)</li>
          <li>$2.15</li>

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
          <li>$40.85</li>

        </ul>
      </div>

      </div>
    );
  }
}

export default PriceSummary;
