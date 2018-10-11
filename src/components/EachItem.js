import React, { Component } from 'react';

class EachItem extends Component {
  render() {
    console.log('EachItem this.this.props is: ', this.props)
    return (
      <div key={this.props.index} className="list-wrapper">

        <li>
          image:
          <img src={this.props.item.image}
            className="item-image"></img>
        </li>

        <li>
          <p>
            Name:
            {this.props.item.name}
          </p>
          <p>
            styleNumber:
            {this.props.item.styleNumber}
          </p>
          <p>
            colorSelected:
            {this.props.item.colorSelected}
          </p>
        </li>

          <li>
            sizeSelected:
            {this.props.item.sizeSelected}
          </li>

          <li>
            quantity:
            {this.props.item.quantity}
          </li>

          <li>
            <div>
              {
                (this.props.item.priceOriginal !== '') ?
                <strike>
                  <li>
                    priceOriginal:
                    {this.props.item.priceOriginal}
                  </li>
                </strike>
                : null
              }
            </div>
            price:
            {this.props.item.price}
          </li>

        </div>
      )
    }
  }

  export default EachItem;
