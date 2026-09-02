import React from 'react'
import Increment from './Increment'
import Decrement from './Decrement'
import Reset from './Reset'

const StateWithFunctionComponentShow = () => {
    let [count,setCount] = React.useState(0)

    let inc = () => {
        setCount(count + 1)
      }

      let dec = () => {
        setCount(count - 1)
      }

      let reset = () => {
        setCount(0)
      }

  return (
    <>
    <div> StateWithFunctionComponentShow  </div>
    <h1>Count : {count}</h1>
    <Increment data={inc}></Increment>
    <Decrement data={dec}></Decrement>
    <Reset data={reset}></Reset>
    </>
    
  )
}

export default StateWithFunctionComponentShow
