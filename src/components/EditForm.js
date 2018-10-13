import React, { Component } from 'react';

class EditForm extends Component {
  render() {
    console.log('EditForm this.props is: ', this.props)
    return (
      <div className="EditForm">

        <div id="column-1">
        <form onSubmit={this.props.handleSubmit}>
          <p>
            {this.props.item.name}
          </p>

          <p>
            ${this.props.item.price.toFixed(2)}
          </p>

          <p>
            {this.props.item.styleNumber}
          </p>

          <label>
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
          </label>

          <br></br>

          <label>
            Size:
            <select name="sizeSelected"
              defaultValue={this.props.item.sizeSelected}
              onChange={this.props.handleInputChange}>
              <option value="small">small</option>
              <option value="medium">medium</option>
              <option value="large">large</option>
              <option value="extra-large">extra-large</option>
            </select>
          </label>

          <br></br>

          <label>
            Quantity:
            <input type="number"
              name="quantity"
              min="1"
              defaultValue={this.props.item.quantity}
              onChange={this.props.handleInputChange}
            />
          </label>

          <br></br>

          <input type="submit" value="EDIT" id="edit-button"/>
          <u>
            Check product details
          </u>
        </form>
      </div>

        <div id="column-2">
          <p>
            this should be in column 2....
          </p>
          <p>
            form is in column 1, image will go here
          </p>

          <img src={this.props.item.image}></img>

        </div>

      </div>
    );
  }
}

export default EditForm;
