import React from "react"
import ArrowFunction from "./components/ArrowFunction"
import ClassBased from "./components/ClassBased"
import FunctionBased from "./components/FunctionBased"
import Numberalues from "./components/NumberValues"
import StringValues from "./components/StringValues"
import ObjectValues from "./components/ObjectValue"
import ArrayValues from "./components/ArrayValues"

class App extends React.Component {
  render(){
    return(
      <>
      <h1>I am App Component</h1>
      <ClassBased></ClassBased>
      <FunctionBased></FunctionBased>
      <ArrowFunction></ArrowFunction>

      <Numberalues></Numberalues>
      <StringValues></StringValues>
      <ObjectValues></ObjectValues>
      <ArrayValues></ArrayValues>
     </>
    )
  }
}

export default App