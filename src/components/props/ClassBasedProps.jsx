import React from "react";

class ClassBasedProps extends React.Component {
  render() {
    return (
      <>
        <h3>This is class Based Props</h3>
        <h3>my name =  {this.props.name}, age = {this.props.age}</h3>
      </>
    );
  }
}

export default ClassBasedProps;
