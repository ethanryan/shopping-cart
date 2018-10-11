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
          <ul>
            {
              this.props.items.map( (item, index) =>
              <EachItem
                key={index}
                item={item}
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
