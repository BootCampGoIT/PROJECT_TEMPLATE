import React, { Component } from "react";

const initialState = { data: "" };

class ProductForm extends Component {
  state = {
    ...initialState,
  };

  onHandleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onHandleSubmit = (e) => {
    e.preventDefault();
    this.props.addProduct(this.state);
    this.setState({ ...initialState });
  };

  render() {
    return (
      <form onSubmit={this.onHandleSubmit}>
        <label>
          Data
          <input
            type='text'
            name='data'
            value={this.state.data}
            onChange={this.onHandleChange}
          />
        </label>
        <button type='submit'>Add Data</button>
      </form>
    );
  }
}

export default ProductForm;
