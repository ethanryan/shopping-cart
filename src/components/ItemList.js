import React, { Component } from 'react';

class ItemList extends Component {
  render() {
    console.log('ItemList this.props is: ', this.props)
    return (
      <div className="ItemList">

        <p>
          this is the ItemList
        </p>

        <div>
          {
            this.props.items.map( (item, index) =>
            <div key={index} className="EachItem">
              <ul>
                <li>
                  Name:
                  {item.name}
                </li>
                <li>
                  styleNumber:
                  {item.styleNumber}
                </li>
                <li>
                  colorSelected:
                  {item.colorSelected}
                </li>
                <li>
                  sizeSelected:
                  {item.sizeSelected}
                </li>
                <li>
                  quantity:
                  {item.quantity}
                </li>
                <li>
                  price:
                  {item.price}
                </li>
              </ul>
            </div>
          )
        }
      </div>

    </div>
  );
}
}

export default ItemList;
