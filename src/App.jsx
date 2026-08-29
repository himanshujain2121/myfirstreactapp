import React from "react";
import MainComponent from "./components/learnComponent/MainComponent";
import ObjectMain from "./components/learnObjects/ObjectMain";
import PropsMain from "./components/props/propsMain";

class App extends React.Component {
  render() {
    return (
      <>
        {/* Learn Component start  */}
        {/* <MainComponent></MainComponent> */}

        {/* Learn String, Number, Array, Object */}
        {/* <ObjectMain></ObjectMain> */}

        {/* props */}
        <PropsMain></PropsMain>
      </>
    );
  }
}

export default App;
