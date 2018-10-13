import React, { Component } from 'react';


class EachItem extends Component {

  convertSize(size) {
    if (size === "small") {
      return "S"
    }
    if (size === "medium") {
      return "M"
    }
    if (size === "large") {
      return "L"
    }
    if (size === "extra-large") {
      return "XL"
    }
  }

  render() {
    return (
      <div className="list-wrapper">

        <li className="center">
          <img src={this.props.item.image} alt={`${this.props.item.name}`} className="item-image"></img>
        </li>

        <li>
          <p>
            <strong>
              {this.props.item.name}
            </strong>
          </p>
          <p>
            Style #: {this.props.item.styleNumber}
          </p>
          <p>
            Color: {this.props.item.colorSelected}
          </p>

          <br></br>

          <button className="unstyled-button" value={this.props.index} onClick={this.props.toggleEditMode}>EDIT</button> | <button className="unstyled-button" value={this.props.index} onClick={this.props.handleDeleteItem}>X REMOVE</button> | <span>SAVE FOR LATER</span>
        </li>

        <li className="center">
          {this.convertSize(this.props.item.sizeSelected)}
        </li>

        <li className="center">
          {this.props.item.quantity}
        </li>

        <li className="align-right">
          <div>
            {
              (this.props.item.priceOriginal !== '') ?
              <strike>
                ${this.props.item.priceOriginal}
              </strike>
              : null
            }
          </div>
          ${this.props.item.price}
        </li>

      </div>
    )
  }
}

export default EachItem;
