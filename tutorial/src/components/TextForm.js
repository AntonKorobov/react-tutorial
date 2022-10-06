import React, { Component } from 'react';

export default class TextForm extends Component {
  constructor() {
    super();
    this.state = {
      first: 'default',
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form>
        <input type='text' name='first' value={this.state.first} placeholder='Type text here ->' onChange={this.handleChange} />
        <h1>{this.state.first}</h1>
      </form>
    );
  }
}
