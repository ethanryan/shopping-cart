import React, { Component } from 'react';

class EditForm extends Component {
  render() {
    console.log('EditForm this.props is: ', this.props)
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <label>
            {/* updating this.state.items[editingIndex], aka: {this.state.items[this.state.editingIndex].name} */}
            updating this.state.items[editingIndex], aka: {this.props.item.name}
          </label>

      <br></br>

          <label>
            Color:
            <input type="text"
              name="colorSelected"
              onChange={this.props.handleInputChange}
            />
          </label>

      <br></br>

          <label>
            Size:
            {/* <input type="text"
              name="sizeSelected"
              defaultValue={this.props.item.sizeSelected}
              onChange={this.props.handleInputChange}
            /> */}
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

          <input type="submit" value="EDIT" />
        </form>
      </div>
    );
  }
}

export default EditForm;
