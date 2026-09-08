import React from 'react'
import IncrementFunction from './IncrementFunction'
import DecrementFunction from './DecrementFunction'
import ResetFunction from './ResetFunction'


const StateWithFunctionHooksComponentValue = () => {
    
    let[count,setCount] = React.useState(0)

    let inc = ()=>{
        setCount(count = count +1)
    }
    let dec = ()=>{
        setCount(count = count -1)
    }
    let reset = ()=>{
        setCount(count = 0)
    }


  return (
    <div>
      StateWithFunctionHooksComponentValue
      <h2>Count = {count}</h2>
      <IncrementFunction inc={inc}></IncrementFunction>
      <DecrementFunction dec={dec}></DecrementFunction>
      <ResetFunction reset={reset}></ResetFunction>
    </div>
  )
}

export default StateWithFunctionHooksComponentValue
