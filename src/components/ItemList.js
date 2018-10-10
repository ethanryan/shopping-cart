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
              <div key={index}>
                {item.name}
              </div>
            )
          }
        </div>

      </div>
    );
  }
}

export default ItemList;
