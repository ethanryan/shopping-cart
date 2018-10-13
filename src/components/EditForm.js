import React, { Component } from 'react';

class EditForm extends Component {
  render() {
    let displayColor = this.props.colorSelected ? this.props.colorSelected : this.props.item.colorSelected
    console.log('EditForm this.props is: ', this.props)
    return (
      <div className="EditForm center-text">

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

          <div>
            {
              this.props.item.colors.map( (color, index) => {
                return (
                  <span key={index} style={{border: `1px solid black`, margin: `10px`, color: `${color}`, backgroundColor: `${color}`}}>
                    <label className="colorRadioButtons">
                      <input type="radio"
                        className="hidden"
                        onChange={this.props.handleInputChange}
                        name="colorSelected"
                        value={color}
                        defaultChecked={(this.props.item.colorSelected === color) ? true : false}
                      />
                      {/* {color} */}
                    </label>
                  </span>
                )
              })
            }
          <p>
            Color: {displayColor} <span className="dot"
              style={{
                color: `${displayColor}`,
                backgroundColor: `${displayColor}`
              }}></span>
          </p>
        </div>

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

            <span className="padding-left">
            Quantity:
            <input type="number"
              className="align-right input-field-compact"
              name="quantity"
              min="1"
              defaultValue={this.props.item.quantity}
              onChange={this.props.handleInputChange}
            />
          </span>
          </p>

          <br></br>

          <p>
            <input type="submit" value="EDIT" className="primary-button"/>
            <br></br>
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
