import React from "react";
import MainComponent from "./components/learnComponent/MainComponent";
import ObjectMain from "./components/learnObjects/ObjectMain";
import PropsMain from "./components/props/propsMain";
import FunctionCallProps from "./components/functionCallProps";

import StateInClass from "./components/StateInClass";
import Movie from "./components/movie";
import Food from "./components/food";
import StateInClassWithComponent from "./components/StateInClassWithComponent";
import Practice from "./components/practice/Practice";
import StateInFunction from "./components/StateInFunction";
import StateWithFunctionComponentShow from "./components/StateWithFunctionComponentShow";



class App extends React.Component {


  render() {
   



    let demo = ()=> {
      return <p>I am a demo function</p>
    };
    
    return (
      <>
        {/* Learn Component start  */}
        {/* <MainComponent></MainComponent> */}

        {/* Learn String, Number, Array, Object */}
        {/* <ObjectMain></ObjectMain> */}

        {/* props */}
        {/* <PropsMain></PropsMain> */}

        {/* <FunctionCallProps demo={demo}></FunctionCallProps> */}


      {/* <Movie  ></Movie>

      <Food ></Food> */}


      {/* <MovieCart  moviearr={moviearr} foodarr={foodarr}></MovieCart> */}

      {/* <StateInClass></StateInClass> */}

      {/* <StateInClassWithComponent></StateInClassWithComponent> */}

      <Practice></Practice>

        {/* <StateInFunction></StateInFunction>

        <StateWithFunctionComponentShow></StateWithFunctionComponentShow> */}
      </>
    );
  }
}

export default App;
