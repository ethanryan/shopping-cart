import React, { Component } from 'react';

import EachItem from './EachItem';

class ItemList extends Component {
  render() {
    // console.log('ItemList this.props is: ', this.props)
    return (
      <div>

        <div className="ItemList">

          <ul className="list-wrapper center-text" id="list-header">
            <li>{this.props.items.length} ITEMS</li>
            <li></li>
            <li>SIZE</li>
            <li>QTY</li>
            <li className="align-right">PRICE</li>
          </ul>

          <hr></hr>

          <ul className="ItemList-ul">
            {
              this.props.items.map( (item, index) =>
              <div key={index}>
                <EachItem
                  key={index}
                  index={index}
                  item={item}
                  handleDeleteItem={this.props.handleDeleteItem}
                  toggleEditMode={this.props.toggleEditMode}
                />
                <hr></hr>
              </div>
            )
          }
          </ul>
        </div>
      </div>
    );
  }
}

export default ItemList;
