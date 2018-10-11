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
          <ul>
            ENTER PROMOTION CODE OR GIFT CARD
          </ul>
          <ul>two</ul>
          <ul>three</ul>
          <ul>four</ul>
        </ul>
      </div>

      </div>

    );
  }
}

export default PriceSummary;
