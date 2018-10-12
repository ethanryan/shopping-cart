import React, { Component } from 'react';

import EachItem from './EachItem';

class ItemList extends Component {
  render() {
    console.log('ItemList this.props is: ', this.props)
    return (
      <div>

        <p>
          this is the ItemList
        </p>

        <div className="ItemList">

          <div className="list-wrapper" id="list-header">
            <li>{this.props.items.length} ITEMS</li>
            <li></li>
            <li>SIZE</li>
            <li>QTY</li>
            <li>PRICE</li>
          </div>

          <ul className="ItemList-ul">
            {
              this.props.items.map( (item, index) =>
              <EachItem
                key={index}
                index={index}
                item={item}
                handleDeleteItem={this.props.handleDeleteItem}
                toggleEditMode={this.props.toggleEditMode}
              />
              )
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default ItemList;
