import React, { Component } from "react";
import PropsWithClass from "./PropsWithClass";
import PropsWithFunction from "./PropsWithFunction";
import PropsWithCallingFunction from "./PropsWithCallingFunction";
import Pizza from "./Pizza";
import Toppings from "./Toppings";
import StateWithClass from "./StateWithClass";
import StateWithClassComponent from "./StateWithClassComponent";
import StateWithFunctionHooks from "./StateWithFunctionHooks";
import StateWithFunctionHooksComponent from "./StateWithFunctionHooksComponent";

export default class Practice extends Component {

  constructor(){
    super();
     this.employee = {
      name:"harvik",
      age:2
    };

    this.hr = [
      {
        name:"cs",
        id:234
      },
      {
        name:"mech",
        id:96
      }
    ]

    this.run = () =>{
      return "Hi, I am Running"
    }
  }
  
  render() {
    return (
      <>
     
        <PropsWithClass employee={this.employee} hr={this.hr}></PropsWithClass>
        <p>-------------------</p>

        <PropsWithFunction employee={this.employee} hr={this.hr}></PropsWithFunction>
        <p>-------------------</p>
        
        <PropsWithCallingFunction run={this.run}></PropsWithCallingFunction>

        <p>*************** Transfer data to common component *****************</p>
        <Pizza></Pizza>
        <Toppings></Toppings>

        <p>*************** state with class*****************</p>
        <StateWithClass></StateWithClass>
        <StateWithClassComponent></StateWithClassComponent> 

        <p>*************** state with function with the help of hooks *****************</p>
        <StateWithFunctionHooks></StateWithFunctionHooks>

        <StateWithFunctionHooksComponent></StateWithFunctionHooksComponent>
      </>
    );
  }
}
