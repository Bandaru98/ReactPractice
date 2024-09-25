import React, { Component } from 'react';

export default class State extends Component {
  constructor() {
    super();
    this.state = {
      value: 0,
    };
  }

  handlePositive = () => {
    this.setState({ value: this.state.value + 1 });
  };

  handleNegative = () => {
    this.setState({ value: this.state.value - 1 });
  };

  handleReset = () => {
    this.setState({ value: 0 });
  };

  handleInt = () => {
    if (this.state.value < 0) {
      this.setState({ value: this.state.value + 1 });
    } else {
      this.setState({ value: 0 });
    }
  };

  render() {
    return (
      <div>
        <h2>State Class Component</h2>
        <h3>{this.state.value}</h3>
        <button className="btn btn-primary" onClick={this.handlePositive}>Positive</button>
        <button className="btn btn-primary ms-1" onClick={this.handleNegative}>Negative</button>
        <button className="btn btn-primary ms-1" onClick={this.handleReset}>Reset</button>
        <button className="btn btn-primary ms-1" onClick={this.handleInt}>Handle Int</button>
      </div>
    );
  }
}
