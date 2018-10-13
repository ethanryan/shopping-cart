import React, { Component } from 'react';

class PromoCodeForm extends Component {
  render() {
    return (
      <div id="PromoCodeForm">
        <form onSubmit={this.props.handlePromoSubmit}>
          <label>
            <input type="text"
              placeholder={this.props.promoCode.toUpperCase()}
              value={this.props.promoCodeInput}
              onChange={this.props.handlePromoChange}
            />
          </label>
          <input type="submit" value="Apply" />
        </form>
      </div>
    );
  }
}

export default PromoCodeForm;
