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

            {/* <div>
              <input type="radio" id="contactChoice1"
               name="contact" value="email"/>
              <label>Email</label>

              <input type="radio" id="contactChoice2"
               name="contact" value="phone"/>
              <label>Phone</label>

              <input type="radio" id="contactChoice3"
               name="contact" value="mail"/>
              <label>Mail</label>
            </div> */}

            <div>
              <input type="radio" id="contactChoice1"
                onChange={this.props.handleInputChange}
                name="colorSelected" value="red" defaultChecked={(this.props.item.colorSelected === "red") ? true : false}
              />
              <label>red</label>

              <input type="radio" id="contactChoice2"
                onChange={this.props.handleInputChange}
               name="colorSelected" value="green" defaultChecked={(this.props.item.colorSelected === "green") ? true : false}
             />
              <label>green</label>

              <input type="radio" id="contactChoice3"
                onChange={this.props.handleInputChange}
               name="colorSelected" value="blue" defaultChecked={(this.props.item.colorSelected === "blue") ? true : false}
             />
              <label>blue</label>
            </div>

            {/* <select name="colorSelected"
              defaultValue={this.props.item.colorSelected}
              onChange={this.props.handleInputChange}>
              <option value="red">red</option>
              <option value="blue">blue</option>
              <option value="pink">pink</option>
            </select> */}
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

          <input type="submit" value="EDIT" />
        </form>
      </div>
    );
  }
}

export default EditForm;
