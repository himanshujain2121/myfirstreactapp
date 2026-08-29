import React from "react"
import Numberalues from "./components/NumberValues"
import StringValues from "./components/StringValues"
import ObjectValues from "./components/ObjectValue"
import ArrayValues from "./components/ArrayValues"
import ProductArray from "./components/props/productArray"
import PropsWithClass from "./components/props/PropsWithClass"
import MainComponent from "./components/learnComponent/MainComponent"

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
       {/* Learn Component start  */}
      <MainComponent></MainComponent>

      {/* Learn String, Number, Array, Object */}
      

      <ProductArray productDetails={this.productDetails}></ProductArray>
      <PropsWithClass name="ravi" age={21}></PropsWithClass>

      {/* 

      <Numberalues></Numberalues>
      <StringValues></StringValues>
      <ObjectValues></ObjectValues>
      <ArrayValues></ArrayValues> */}
     </>
    )
  }
}

export default App