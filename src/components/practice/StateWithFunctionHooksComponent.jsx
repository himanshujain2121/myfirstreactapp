import React from 'react'
import Increment from './Increment'
import Decrement from './Decrement'
import Reset from './Reset'

const StateWithFunctionHooksComponent = () => {

    let [count,setCount] = React.useState(0)

    let inc = () => {
        setCount(count+1)
    }

    let dec = () => {
        setCount(count-1)
    }

    let reset = () => {
        setCount(0)
    }

  return (
   <>
    <div>  StateWithFunctionHooksComponent  </div>
    <h1>Count = {count}</h1>
    <Increment inc= {inc}></Increment>
    <Decrement dec = {dec}></Decrement>
    <Reset reset={reset}></Reset>
   </>
  )
}

export default StateWithFunctionHooksComponent
