import React, { Component } from "react";
import StsteWithClassComponentShow from "./StsteWithClassComponentShow";

export default class StateInClassWithComponent extends Component {
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
        <div>StateInClassWithComponent</div>

        <StsteWithClassComponentShow count={this.state.count} ></StsteWithClassComponentShow>
        
        <button onClick={this.inc}>increment</button>
        <button onClick={this.dec}>decrement</button>
        <button onClick={this.reset}>reset</button>
      </>
    );
  }
}
