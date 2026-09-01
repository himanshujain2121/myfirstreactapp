import React, { Component } from "react";

export default class PropsWithClass extends Component {
  render() {
    return (
      <>
        <div> ****** PropsWithClass *********</div>

        // --------- single object
        <p>Employee name = {this.props.employee.name}</p>
        <p>Employee name = {this.props.employee.age}</p>
        
        // ------------ Array object
        {this.props.hr.map((val, index) => {
          return (
            <p key={index}>
              HR Department = {val.name} - with id - {val.id}
            </p>
          );
        })}
      </>
    );
  }
}
