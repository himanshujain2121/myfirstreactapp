import React, { Component } from 'react'
import StateWithShowingComponent from './StateWithShowingComponent'

export default class StateWithClassComponent extends Component {
  constructor(){
    super()

    this.state ={
      count : 0
    }

    this.inc = () => {
      this.setState({count: this.state.count + 1})
    }

    this.dec = () => {
      this.setState({count: this.state.count - 1})
    }
    this.reset = () => {
      this.setState({count: 0})
    }
  }
  render() {
    return (
        <>
         <div>  StateWithClassComponent </div>
         <StateWithShowingComponent data={this.state.count}></StateWithShowingComponent>
         <button onClick={this.inc}>increment</button>
        <button onClick={this.dec}>decrement</button>
        <button onClick={this.reset}>reset</button>
        </>
     
    )
  }
}
