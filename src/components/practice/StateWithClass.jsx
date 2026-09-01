import React, { Component } from "react";

export default class StateWithClass extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };

    this.inc = () => {
      this.setState({ count: this.state.count + 1 });
    };

    this.dec = () => {
      this.setState({ count: this.state.count - 1 });
    };

    this.reset = () => {
      this.setState({ count: 0 });
    };
  }
  render() {
    return (
      <>
        <div> StateWithClass </div>
        <h3>Count = {this.state.count}</h3>
        <button onClick={this.inc}>increment</button>
        <button onClick={this.dec}>decrement</button>
        <button onClick={this.reset}>reset</button>
      </>
    );
  }
}
