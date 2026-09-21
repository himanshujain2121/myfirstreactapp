import React, { Component } from 'react'

export default class Student extends Component {

    constructor(){
        super()
        console.log("I am a constructor")
        this.state = {
            count : 0
        }

        this.add = ()=>{
            this.setState({count:this.state.count+1})
        }

    }

    // ✅ Placed correctly on the class body, outside the constructor
    static getDerivedStateFromProps(props, state) {
        console.log("I am from getDerivedStateFromProps", { props, state });
        console.log(state)
        console.log(props)

        return null; 
    }

        // ✅ Added componentDidMount with console.log
        componentDidMount() {
            console.log("I am from componentDidMount");
        }

    // ✅ Added shouldComponentUpdate
    shouldComponentUpdate(nextProps, nextState) {
        console.log("I am from shouldComponentUpdate", { nextProps, nextState });
        return true; // Crucial: must return true so the component updates and re-renders!
    }

    // ✅ Added componentDidUpdate
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("I am from componentDidUpdate", { prevProps, prevState });
    }

    // ✅ Added componentWillUnmount
    componentWillUnmount() {
        console.log("I am from componentWillUnmount");
    }



  render() {
    console.log("I am render method")
    return (
      <div>
        <h1>Count : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
      </div>
    )
  }
}
