import React, { Component } from 'react';

class EditForm extends Component {
  render() {
    console.log('EditForm this.props is: ', this.props)
    return (
      <div className="EditForm">

        <div id="column-1">
        <form onSubmit={this.props.handleSubmit}>

          <hr></hr>

          <h3>
            {this.props.item.name}
          </h3>

          <h1>
            ${this.props.item.price.toFixed(2)}
          </h1>

          <p>
            {this.props.item.styleNumber}
          </p>

          <p>
            Color:
            {
              this.props.item.colors.map( (color, index) => {
                return (
                  <span key={index}>
                    <label>
                      <input type="radio"
                        onChange={this.props.handleInputChange}
                        name="colorSelected"
                        value={color}
                        defaultChecked={(this.props.item.colorSelected === color) ? true : false}
                      />
                      {color}
                    </label>
                  </span>
                )
              })
            }
          </p>

          <p>
            Size:
            <select name="sizeSelected"
              defaultValue={this.props.item.sizeSelected}
              onChange={this.props.handleInputChange}>
              <option value="small">small</option>
              <option value="medium">medium</option>
              <option value="large">large</option>
              <option value="extra-large">extra-large</option>
            </select>
          </p>

          <p>
            Quantity:
            <input type="number"
              name="quantity"
              min="1"
              defaultValue={this.props.item.quantity}
              onChange={this.props.handleInputChange}
            />
          </p>

          <p>
            <input type="submit" value="EDIT" id="edit-button"/>
            <u>
              Check product details
            </u>
          </p>
        </form>
      </div>

        <div id="column-2" className="center">

          <img src={this.props.item.image} alt={`${this.props.item.name}`}></img>

        </div>

      </div>
    );
  }
}

export default EditForm;
