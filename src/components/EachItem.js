import React, { Component } from 'react';

class EachItem extends Component {

  whatAmI(e) {
    console.log('whatAmI called...')
    console.log('whatAmI called, e is: ', e)
    console.log('whatAmI called, e.target.value is: ', e.target.value)
  }

  render() {
    // console.log('EachItem this.this.props is: ', this.props)
    console.log('EachItem this.this.props.index is: ', this.props.index)
    return (
      <div className="list-wrapper">

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
          
          <span id="edit-button">EDIT</span> | <a value={this.props.index} onClick={this.props.handleDeleteItem}>X REMOVE</a> | <span>SAVE FOR LATER</span>
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
