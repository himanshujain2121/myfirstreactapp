import ClassBasedProps from "./ClassBasedProps";
import FunctionBasedProps from "./FunctionBasedProps";

function PropsMain() {
  let productDetails = [
    { name: "bicycle", price: 1500 },
    { name: "bike", price: 150000 },
    { name: "bus", price: 40000 },
    { name: "train", price: 50000 },
  ];
  return (
    <>
      {/* 1. Props are used to pass data from parent → child.
            2. Function component: props.name
            3. Class component: this.props.name
            4. Props are read-only; don't modify them.
            5. Functions can also be passed as props, allowing a child to trigger logic in the parent. */}
      <h3>**** Props Main Start *****</h3>

      {/* Class Based props */}
      <ClassBasedProps name={"Himanshu"} age={35}></ClassBasedProps>
      

      {/* function based props with array based props*/}
      <FunctionBasedProps name={"Navisha"} age={10} productDetails= {productDetails}></FunctionBasedProps>

      {/* Function can also be passed as Props */}


      {/* Function can also be passed as UseState */}
     
    </>
  );
}

export default PropsMain;
