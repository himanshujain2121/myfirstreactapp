import ArrowBasedComponent from "./ArrorBasedComponent";
import ClassBasedCoponent from "./ClassBasedComponent";
import FunctionBasedComponent from "./FunctionBasedComponent";

function MainComponent() {
  return (
    <>
      <h2>************ This is Main Component Package************</h2>;
      {/* Class Based Component */}
      <ClassBasedCoponent></ClassBasedCoponent>

      {/* Function Based Component */}
      <FunctionBasedComponent></FunctionBasedComponent>

      {/* Arrow Based Component */}
      <ArrowBasedComponent></ArrowBasedComponent>

      <h2>************ This is Main Component Over************</h2>;
    </>
  );
}

export default MainComponent;
