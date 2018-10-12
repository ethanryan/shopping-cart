import React, { Component } from 'react';

class promoCodeForm extends Component {
  render() {
    console.log('promoCodeForm this.props is: ', this.props)
    return (
      <div id="promoCodeForm">
        <form onSubmit={this.props.handlePromoSubmit}>
          <label>
            PromoCode:
            <input type="text" value={this.props.promoCodeInput} onChange={this.props.handlePromoChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default promoCodeForm;
