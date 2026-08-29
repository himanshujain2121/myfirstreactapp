import React from "react"
import ArrowFunction from "./components/ArrowFunction"
import ClassBased from "./components/ClassBased"
import FunctionBased from "./components/FunctionBased"
import Numberalues from "./components/NumberValues"
import StringValues from "./components/StringValues"
import ObjectValues from "./components/ObjectValue"
import ArrayValues from "./components/ArrayValues"
import ProductArray from "./components/props/productArray"
import PropsWithClass from "./components/props/PropsWithClass"

class App extends React.Component {
   productDetails = [
    { name: "bicycle", price: 1500 },
    { name: "bike", price: 150000 },
    { name: "bus", price: 40000 },
    { name: "train", price: 50000 }
  ];
  render(){
    return(
      <>
      <ProductArray productDetails={this.productDetails}></ProductArray>
      <PropsWithClass name="ravi" age={21}></PropsWithClass>

      {/* <h1>I am App Component</h1>
      <ClassBased></ClassBased>
      <FunctionBased></FunctionBased>
      <ArrowFunction></ArrowFunction>

      <Numberalues></Numberalues>
      <StringValues></StringValues>
      <ObjectValues></ObjectValues>
      <ArrayValues></ArrayValues> */}
     </>
    )
  }
}

export default App