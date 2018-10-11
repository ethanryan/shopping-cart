import React, { Component } from 'react';


class PriceSummary extends Component {
  render() {
    console.log('PriceSummary this.props is: ', this.props)
    return (
      <div>

        <p>
          this is the PriceSummary
        </p>

        <div className="PriceSummary">

          <div>contact info</div>

          <div>pricing info</div>

          {/* <div className="list-wrapper" id="list-header">
            <li>{this.props.items.length} ITEMS</li>
            <li></li>
            <li>SIZE</li>
            <li>QTY</li>
            <li>PRICE</li>
          </div> */}

        </div>
      </div>
    );
  }
}

export default PriceSummary;
