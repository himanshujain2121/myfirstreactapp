import React from "react";
import MainComponent from "./components/learnComponent/MainComponent";
import ObjectMain from "./components/learnObjects/ObjectMain";
import PropsMain from "./components/props/propsMain";
import FunctionCallProps from "./components/functionCallProps";



class App extends React.Component {


  render() {
    let moviearr = [
      {
        name:"kranti",
        price:200
      },
      {
        name:"demo",
        price:100
      },
      {
        name:"run",
        price:300
      }
    ]

    let foodarr = [
      {
        name:"samosa",
        price:50
      },
      {
        name:"water",
        price:30
      },
      {
        name:"popcorn",
        price:300
      }
    ]

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

        <FunctionCallProps demo={demo}></FunctionCallProps>


      {/* <Movie moviearr={moviearr}></Movie>

      <Food foodarr={foodarr}></Food> */}


      {/* <MovieCart  moviearr={moviearr} foodarr={foodarr}></MovieCart> */}

      </>
    );
  }
}

export default App;
