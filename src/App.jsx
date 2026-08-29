import React from "react"
import ProductArray from "./components/props/productArray"
import PropsWithClass from "./components/props/PropsWithClass"
import MainComponent from "./components/learnComponent/MainComponent"
import ObjectMain from "./components/learnObjects/ObjectMain"

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
      <ObjectMain></ObjectMain>

      <ProductArray productDetails={this.productDetails}></ProductArray>
      <PropsWithClass name="ravi" age={21}></PropsWithClass>

     </>
    )
  }
}

export default App