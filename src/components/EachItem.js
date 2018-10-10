import React, { Component } from 'react';

class EachItem extends Component {
  render() {
    console.log('EachItem this.this.props is: ', this.props)
    return (
            <div key={this.props.index} className="EachItem">
                <li>
                  Name:
                  {this.props.item.name}
                </li>
                <li>
                  styleNumber:
                  {this.props.item.styleNumber}
                </li>
                <li>
                  colorSelected:
                  {this.props.item.colorSelected}
                </li>
                <li>
                  sizeSelected:
                  {this.props.item.sizeSelected}
                </li>
                <li>
                  quantity:
                  {this.props.item.quantity}
                </li>
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
                <li>
                  price:
                  {this.props.item.price}
                </li>
                <li>
                  image:
                  <img src={this.props.item.image}
                    className="item-image"></img>
                </li>
            </div>
          )
}
}

export default EachItem;
