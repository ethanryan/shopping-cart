import React, { Component } from 'react';

import EachItem from './EachItem';

class ItemList extends Component {
  render() {
    console.log('ItemList this.props is: ', this.props)
    return (
      <div className="ItemList">

        <p>
          this is the ItemList
        </p>

        <div>
          <ul>
          {
            this.props.items.map( (item, index) =>
            <EachItem
              key={index}
              item={item}
            />
            // <div key={index} className="EachItem">
            //     <li>
            //       Name:
            //       {item.name}
            //     </li>
            //     <li>
            //       styleNumber:
            //       {item.styleNumber}
            //     </li>
            //     <li>
            //       colorSelected:
            //       {item.colorSelected}
            //     </li>
            //     <li>
            //       sizeSelected:
            //       {item.sizeSelected}
            //     </li>
            //     <li>
            //       quantity:
            //       {item.quantity}
            //     </li>
            //     <li>
            //       price:
            //       {item.price}
            //     </li>
            // </div>
          )
        }
      </ul>
      </div>

    </div>
  );
}
}

export default ItemList;
