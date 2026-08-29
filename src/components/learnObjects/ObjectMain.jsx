import ArrayCOmponent from "./ArrayComponent";
import NumberComponent from "./NumberComponent";
import ObjectComponent from "./ObjectComponent";
import StringComponent from "./StringComponent";

function ObjectMain() {
  return (
    <>
      <h1>******* This is Object Component **********</h1>
      {/* Number Component */}
      <NumberComponent></NumberComponent>

      {/* String Component */}
      <StringComponent></StringComponent>

      {/* Array Component */}
        <ArrayCOmponent></ArrayCOmponent>

      {/* Object Component  */}
      <ObjectComponent> </ObjectComponent>
    </>
  );
}

export default ObjectMain;
