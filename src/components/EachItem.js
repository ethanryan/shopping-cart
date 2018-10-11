import React, { Component } from 'react';

class EachItem extends Component {

  render() {
    // console.log('EachItem this.this.props is: ', this.props)
    return (
      <div key={this.props.index} className="list-wrapper">

        <li>
          image:
          <img src={this.props.item.image}
            className="item-image"></img>
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

          <span id="edit-button">EDIT</span> | <span>X REMOVE</span> | <span>SAVE FOR LATER</span>
        </li>

          <li>
            {this.props.item.sizeSelected}
          </li>

          <li>
            {this.props.item.quantity}
          </li>

          <li>
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
